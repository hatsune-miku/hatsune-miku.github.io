import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"
import Color from "../../utils/color";

const copyWriting = `
Multiflow is a multiphase flow transient simulator written in Qt and C++.
This project is developed in response to the requirements of Capital
Normal University. Highlights:

- Collaborating with algorithm department to build a platform for Qt
for visual modeling, oil well lift method design, model configuration
and simulation results presenting.

- Focused on detailed UI design, achieving streamlined functionality
and practicality, facilitating user comprehension of the current
production system model, operational status and fluid property
distribution within the wellbore pipeline.
`

export default function ProjectMultiflow() {
    return <>
        <Typography level="h3" color="primary">
            Multiflow - A multiphase flow transient simulator.
        </Typography>

        <Markdown className={sharedStyles.md}>
            {copyWriting}
        </Markdown>

        <List>
            <ListItem>
                <Divider>Repositories</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link sx={{
                    color: Color.accent("neutral"),
                }} href="https://github.com/2284650586/Multiflow">Github Repo</Link>
            </ListItem>
        </List>
    </>
}
