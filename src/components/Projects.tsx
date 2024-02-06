import sharedStyles from "./Shared.module.scss"
import { Box, Dropdown, Menu, MenuButton, MenuItem, Stack, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"

import useIsMobile from "../utils/is_mobile"
import { Apps } from "@mui/icons-material"
import { useState } from "react"

type ProjectMap = {
    [key: string]: () => JSX.Element
}

type ProjectPageConfig = {
    projectMap: ProjectMap,
    title: string,
    tabClassName: string,
    isPink: boolean,
}

export default function Projects(props: ProjectPageConfig) {
    const isMobile = useIsMobile()
    const projects = Object.keys(props.projectMap)
    const [didFinishedTutorial, setDidFinishedTutorial] = useState(false)
    const [selectedProject, setSelectedProject] = useState(projects[0])
    let projectNavigation = null

    if (isMobile) {
        projectNavigation = <Stack direction="column" spacing={2} sx={{
            p: 2,
        }}>
            <Dropdown>
                <MenuButton
                    startDecorator={<Apps />}
                    variant="solid"
                    color={props.isPink ? "primary" : "neutral"}
                    size="lg"
                >
                    {
                        didFinishedTutorial
                            ? selectedProject
                            : `Switch project (${projects.length} total)`
                    }
                </MenuButton>
                <Menu>
                    {
                        projects.map((p) =>
                            <MenuItem selected={selectedProject === p} onClick={() => {
                                setSelectedProject(p)
                                setDidFinishedTutorial(true)
                            }}>
                                {p}
                            </MenuItem>
                        )
                    }
                </Menu>
            </Dropdown>
            {props.projectMap[selectedProject]()}
        </Stack>
    }
    else {
        projectNavigation =
            <Tabs
                defaultValue={0}
                className={props.tabClassName}
                orientation="vertical"
            >
                <TabList>
                    {projects.map((p) => <Tab key={p}>{p}</Tab>)}
                </TabList>

                {
                    projects.map((p, i) =>
                        <TabPanel key={p} value={i}>
                            {
                                props.projectMap[p]()
                            }
                        </TabPanel>
                    )
                }
            </Tabs>
    }

    return <>
        <Box className={sharedStyles.section} sx={{
            flexDirection: 'column',
            padding: '0 !important'
        }}>
            <Typography level="h1" color="primary" sx={{
                padding: '24px 24px 0 24px'
            }}>
                {props.title}
            </Typography>
            {projectNavigation}
        </Box>
    </>
}
