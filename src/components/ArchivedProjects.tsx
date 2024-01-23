import sharedStyles from "./Shared.module.scss"
import styles from "./ArchivedProjects.module.scss"
import { Box, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"
import useIsMobile from "../utils/is_mobile"
import ProjectMultiflow from "./projects/ProjectMultiflow"
import ProjectMikuWeather from "./projects/ProjectMikuWeather"

export default function ArchivedProjects() {
    const isMobile = useIsMobile()
    return <>
        <Box className={sharedStyles.section} sx={{
            flexDirection: 'column',
            padding: '0 !important'
        }}>
            <Typography level="h1" color="primary" sx={{
                padding: '24px 24px 0 24px'
            }}>
                Archived / Discontinued Projects
            </Typography>

            <Tabs
                defaultValue={0}
                className={styles.tab}
                orientation="vertical"
            >
                <TabList>
                    <Tab>Multiflow</Tab>
                    <Tab>Miku Weather</Tab>
                </TabList>

                <TabPanel value={0}>
                    <ProjectMultiflow />
                </TabPanel>

                <TabPanel value={1}>
                    <ProjectMikuWeather />
                </TabPanel>
            </Tabs>
        </Box>
    </>
}
