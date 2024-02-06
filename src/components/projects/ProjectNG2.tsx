import { Typography } from "@mui/joy"
import Markdown from "react-markdown"
import sharedStyles from "./MarkdownShared.module.scss"

const copyWriting = `
NG2 is a parental control system developed with Tauri (Rust + React.js) and its backend is fully implemented with serverless technologies: Firebase Cloud Functions + Redis. NG2 provides a wide range of monitoring functions with parents to limit screen time for their children:
-	Maximum minutes per day / per session
-	Cooldown time every X minutes
-	Remote screen lock / unlock, remote message
-	Remote shell commands
-	Disallowed / unconditionally-allowed timespan for weekends / weekdays / holidays
-	Device usage report
-	Multiple device management
Time policies are stored in server and changes take effect in real time. 
`

export default function ProjectNG2() {
    return <>
        <Typography level="h3" color="primary">
            NG2 - a parental control system with remote monitor support.
        </Typography>

        <Markdown className={sharedStyles.md}>
            {copyWriting}
        </Markdown>

        <img src="ng2/cp1.PNG" className={sharedStyles.image} />
        <img src="ng2/cp2.PNG" className={sharedStyles.image} />
        <img src="ng2/cp3.PNG" className={sharedStyles.image} />
        <img src="ng2/cp4.PNG" className={sharedStyles.image} />
        <img src="ng2/cp5.PNG" className={sharedStyles.image} />
    </>
}
