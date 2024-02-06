import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"
import Color from "../../utils/color";

const copyWriting = `
Multiflow is a multiphase flow transient simulator written in Qt and C++.
This project is developed by a team of two, in response to the requirements 
of Capital Normal University. Highlights:

- Collaborating with algorithm department to build a platform for Qt
for visual modeling, oil well lift method design, model configuration
and simulation results presenting.

- Focused on detailed UI design, achieving streamlined functionality
and practicality, facilitating user comprehension of the current
production system model, operational status and fluid property
distribution within the wellbore pipeline.

## As the team leader,

I was responsible for the overall project design, including the
QML part of the UI and MultiflowLibrary, which is the core of the
simulation engine.

## Discontinued in late 2023

This project was sunsetted by the original requirements provider
due to unknown reasons. The source code is now available to the public.
`

export default function ProjectMultiflow() {
    return <>
        <Typography level="h3" color="primary">
            Multiflow - A multiphase flow transient simulator.
        </Typography>

        <Markdown className={sharedStyles.md}>
            {copyWriting}
        </Markdown>

        <Typography level="h4" color="primary">Main View</Typography>
        <img src="multiflow/mf1.png" className={sharedStyles.image} />

        <Typography level="h4" color="primary" sx={{ mt: 4 }}>Well Data Sructure Parser & Well Data & Well Visualization & Black Oil Model</Typography>
        <img src="multiflow/mf-parser1.png" className={sharedStyles.image} />
        <img src="multiflow/mf-parser2.png" className={sharedStyles.image} />
        <img src="multiflow/mf2.png" className={sharedStyles.image} />

        <Typography level="h4" color="primary" sx={{ mt: 4 }}>Lisp-based Equation Parser & Manager & Simulator</Typography>
        <img src="multiflow/mf-parser3.png" className={sharedStyles.image} />
        <img src="multiflow/mf3.png" className={sharedStyles.image} />

        <Typography level="h4" color="primary" sx={{ mt: 4 }}>High Pressure Physical Properties Calculation</Typography>
        <img src="multiflow/mf4.png" className={sharedStyles.image} />

        <Typography level="h4" color="primary" sx={{ mt: 4 }}>Well Artifitial Lifting Calculation & Visualization</Typography>
        <img src="multiflow/mf5.png" className={sharedStyles.image} />

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
