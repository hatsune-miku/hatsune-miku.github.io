import sharedStyles from "./Shared.module.scss"
import styles from "./Projects.module.scss"
import { Box, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"
import useIsMobile from "../utils/is_mobile"
import ProjectAirX from "./projects/ProjectAirX"
import ProjectDircrypt from "./projects/ProjectDircrypt"
import ProjectPortalCheat from "./projects/ProjectPortalCheat"
import ProjectChatgptRelay from "./projects/ProjectChatgptRelay"
import ProjectMss2 from "./projects/ProjectMSS2"

export default function Projects() {
    const isMobile = useIsMobile()

    return <>
        <Box className={sharedStyles.section} sx={{
            flexDirection: 'column',
            padding: '0 !important'
        }}>
            <Typography level="h1" color="primary" sx={{
                padding: '24px 24px 0 24px'
            }}>
                Active Projects
            </Typography>

            <Tabs
                defaultValue={0}
                className={styles.tab}
                orientation="vertical"
            >
                <TabList>
                    <Tab>AirX</Tab>
                    <Tab>dircrypt.py</Tab>
                    <Tab>Portal2 Cheat</Tab>
                    <Tab>ChatGPTRelay</Tab>
                    <Tab>MSS2</Tab>
                </TabList>

                <TabPanel value={0}>
                    <ProjectAirX />
                </TabPanel>

                <TabPanel value={1}>
                    <ProjectDircrypt />
                </TabPanel>

                <TabPanel value={2}>
                    <ProjectPortalCheat />
                </TabPanel>

                <TabPanel value={3}>
                    <ProjectChatgptRelay />
                </TabPanel>

                <TabPanel value={4}>
                    <ProjectMss2 />
                </TabPanel>
            </Tabs>
        </Box>
    </>
}
