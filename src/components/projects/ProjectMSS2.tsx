import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"

const copyWriting = `
Memorial Self-service 2 (MSS2) is a revamped version of the university's
self-service system, implemented with modern front- (Vue, ElementPlus)
and back-end (SpringBoot) frameworks. Highlights:

- Applied OAuth2-based authentication and authorization system
with SpringSecurity to seamlessly dock with university's existing
unified identity verification portal.
`

export default function ProjectMss2() {
    return <>
        <Typography level="h3" color="primary">
            Memorial Selfservice II - A reimplementation for university selfservice system.
        </Typography>

        <Markdown className={sharedStyles.md}>
            {copyWriting}
        </Markdown>

        <Typography level="h4" color="primary">
            Example of course registration:
        </Typography>

        <img src="mss2/mss1.png" className={sharedStyles.image} />

        <Typography level="h4" color="primary">
            Example for student infomation filtering and updating:
        </Typography>

        <img src="mss2/mss2.png" className={sharedStyles.image} />

        <List>
            <ListItem>
                <Divider>Repositories</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/hatsune-miku/MSS-Frontend">Github Repo</Link>
            </ListItem>
        </List>
    </>
}
