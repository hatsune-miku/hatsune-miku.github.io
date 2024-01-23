import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Stack, Typography } from "@mui/joy";
import Color from "../../utils/color";
import useDarkMode from "../../utils/is_darkmode";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"

const airxCopyWriting = `
Functions:

- Place portals anywhere
- Place portals on moving platforms
- God Mode switch
- Noclip switch
- Dissolve object
- Spawn cube
- Spawn companion cube
- Kill
- Open any door
`

export default function ProjectPortalCheat() {
    return <>
        <Typography level="h3" color="primary">
            Portal 2 Cheat Tool - A practice program that tweaks the game "Portal 2" using remote code injection
        </Typography>

        <Markdown className={sharedStyles.md}>
            {airxCopyWriting}
        </Markdown>

        <List>
            <ListItem>
                <Divider>Repositories</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/hatsune-miku/portal2_trainer">Github Repo</Link>
            </ListItem>
        </List>
    </>
}
