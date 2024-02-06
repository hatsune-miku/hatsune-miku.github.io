import Projects from "./Projects"
import ProjectMikuWeather from "./projects/ProjectMikuWeather"
import ProjectMultiflow from "./projects/ProjectMultiflow"

import styles from "./ArchivedProjects.module.scss"

export default function ArchivedProjects() {
    const projectMap = {
        "Multiflow": () => <ProjectMultiflow />,
        "Miku Weather": () => <ProjectMikuWeather />,
    }
    return <Projects
        projectMap={projectMap}
        title="Archived / Old Projects"
        tabClassName={styles.tab}
        isPink={false}
    />
}
