import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"

const copyWriting = `
Markdown test

- 1
- 2

1. 22
1. 222
`

export default function ProjectMikuWeather() {
    return <>
        <Typography level="h3" color="primary">
            Miku Weather - 页面施工中
        </Typography>

        <Markdown className={sharedStyles.md}>
            {copyWriting}
        </Markdown>

        <img src="mikuweather/tmp.jpg" className={sharedStyles.image} />

        <List>
            <ListItem>
                <Divider>Repositories</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link>Github Repo</Link>
            </ListItem>
        </List>
    </>
}
