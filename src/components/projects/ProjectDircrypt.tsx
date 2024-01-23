import { GitHub } from "@mui/icons-material";
import { Divider, Link, List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"

const airxCopyWriting = `
## Malware!?

Well, there is a namesake - I didn't realize a virus also named \`Dircrypt\` (⊙_⊙;)

## dircrypt

\`dircrypt\` runs extremely fast regardless of the size or number of files in the directory. It flattens the directory structure, removing suffixes and replacing filenames with UUIDs. This prevents your data from being previewed, searched or accidentally presented, ensuring that your data is private.
`

export default function ProjectDircrypt() {
    return <>
        <Typography level="h3" color="primary">
            dircrypt - Encrypts & decrypts entire directories, recursively. Blazing fast!
        </Typography>

        <Markdown className={sharedStyles.md}>
            {airxCopyWriting}
        </Markdown>

        <img src="dircrypt/dircrypt.png" className={sharedStyles.image} />

        <List>
            <ListItem>
                <Divider>Repositories</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Link href="https://github.com/hatsune-miku/dircrypt">Github Repo</Link>
            </ListItem>
        </List>
    </>
}
