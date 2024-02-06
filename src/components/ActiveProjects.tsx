import ProjectAirX from "./projects/ProjectAirX"
import ProjectDircrypt from "./projects/ProjectDircrypt"
import ProjectPortalCheat from "./projects/ProjectPortalCheat"
import ProjectChatgptRelay from "./projects/ProjectChatgptRelay"
import ProjectMss2 from "./projects/ProjectMSS2"
import Projects from "./Projects"

import styles from "./ActiveProjects.module.scss"
import ProjectNG2 from "./projects/ProjectNG2"

export default function ActiveProjects() {
    const projectMap = {
        "AirX": () => <ProjectAirX />,
        "NG2": () => <ProjectNG2 />,
        "dircrypt.py": () => <ProjectDircrypt />,
        "Portal2 Cheat": () => <ProjectPortalCheat />,
        "ChatGPTRelay": () => <ProjectChatgptRelay />,
        "MSS2": () => <ProjectMss2 />,
    }
    return <Projects
        projectMap={projectMap}
        title="Active Projects"
        tabClassName={styles.tab}
        isPink
    />
}
