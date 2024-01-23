import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Stack, Typography } from "@mui/joy";
import Color from "../../utils/color";
import useDarkMode from "../../utils/is_darkmode";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"

const copyWriting = `
Built with React.js, SpringBoot and JoyUI, ChatGPTRelay aims to make
OpenAI's ChatGPT accessible to everyone, while offering an experience
very similar to the official one. Highlights:

- Implemented an API key pool to enhance service reliability.

- Leveraged Redis to store high-frequency user token quotas data.
`

export default function ProjectChatgptRelay() {
    return <>
        <Typography level="h3" color="primary">
            ChatGPTRelay - A chatbot based on OpenAI API with builtin usage control.
        </Typography>

        <Markdown className={sharedStyles.md}>
            {copyWriting}
        </Markdown>

        <img src="chatgpt-relay/cgrelay.png" className={sharedStyles.image} />

        <List>
            <ListItem>
                <Divider>Links</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://cg.eggtartc.com/#/login">Online Demo (Account: 3000, Password: 123)</Link>
            </ListItem>
        </List>
    </>
}
