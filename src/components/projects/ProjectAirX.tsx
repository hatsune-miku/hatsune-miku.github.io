import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import Color from "../../utils/color";
import useDarkMode from "../../utils/is_darkmode";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"

const airxCopyWriting = `
AirX is a project finished by a team of 4. It allows users to seamlessly
copy and paste files and text between macOS (SwiftUI), Windows
(WinUI3), Android (React Native), and Linux (Rust) devices over LAN or
Internet, blurring the boundaries between different platforms. AirX also
provides a standalone cloud storage service with support for sharing
links. Highlights:

- Utilized Google Protocol Buffers and self-designed UDP-based
protocol for LAN discovery.

- Employed Apache Kafka in the backend (SpringBoot) for clipboard
synchronization.

- Innovatively combined JWT and AES with randomized keys to
further protect token data.
`

export default function ProjectAirX() {
    const isDarkMode = useDarkMode()

    return <>
        <Typography level="h3" color="primary">
            AirX - A cross-platform text and file sharing system
        </Typography>

        <Markdown className={sharedStyles.md}>
            {airxCopyWriting}
        </Markdown>

        <Typography level="h4" color="primary">
            Here is an video showing how text are copied and pasted across devices:
        </Typography>

        <video id="airx-video" className={sharedStyles.video} controls>
            <source src="airx/text-sync.mp4" type="video/mp4" />
            Your browser does not support playing videos.
        </video>

        <Typography level="h4" color="primary">
            And here for files:
        </Typography>

        <video className={sharedStyles.video} controls>
            <source src="airx/file-sync.mp4" type="video/mp4" />
            Your browser does not support playing videos.
        </video>

        <Typography level="h4" color="primary">
            AirX is open source!
        </Typography>

        <List>
            <ListItem>
                <Divider>Repositories</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/hatsune-miku/AirX-win">Windows Client (WinUI 3)</Link>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/hatsune-miku/airx4a">Android Client (React Native)</Link>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/Lsjy44/airX_mac">macOS Client (SwiftUI)</Link>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/hatsune-miku/airx-cloud">Netdisk Frontend (Vue.js)</Link>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/hatsune-miku/airx-backend">Backend (SpringBoot)</Link>
            </ListItem>
        </List>
    </>
}
