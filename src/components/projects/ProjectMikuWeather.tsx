import { GitHub } from "@mui/icons-material";
import { Divider, List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import Markdown from "react-markdown";
import sharedStyles from "./MarkdownShared.module.scss"

const copyWriting = `
## Story of Miku Weather

The original version of Miku Weather was a builtin weather app for SONY XPERIA feat. HATSUNE MIKU (SO-04E), a
special edition of SONY XPERIA Z released in 2013. It is continuously well received by fans of virtual character "Hatsune Miku".
However, there were two major problems with the original version:

- The weather data was only for Japan.
- The app has been discontinued, even Japanese users cannot use it anymore.

In 2016, I decided to re-implement the app with the following features:

- Weather data for the whole world.
- Multiple areas support.
- Customizable background.
- Able to restore the look and feel of the original one.

Unfortunately, my version could not be released on App Store or Google Play due to copyright issues. I only 
shared it with a few friends and fans of Miku.

**With the help of CoolApk, a Chinese 3rd-party app store, the app was downloaded by more than 20,000 users.**

## More Unlucky,

Even 2016 is so far away from now, and I lost the source code of the app, only APKs are spreading over the Internet. 

A disassembly & reimplementation is in progress. (Quiet funny to disassemble my own app, isn't it?)

## How can I prove I'm the author?

If you obtained the spreading APKs, you can find a username "Eggtart" in the app's settings. 

Following this username, you can find my CoolApk account, where I clarified my authorship in the latest post.
`

export default function ProjectMikuWeather() {
    return <>
        <Typography level="h3" color="primary">
            Miku Weather - a lovely weather forecast app.
        </Typography>

        <Markdown className={sharedStyles.md}>
            {copyWriting}
        </Markdown>

        <img src="mikuweather/tmp.jpg" className={sharedStyles.image} />
        <img src="mikuweather/authorship.PNG" className={sharedStyles.image} />

        <List>
            <ListItem>
                <Divider>Repositories</Divider>
            </ListItem>
            <ListItem>
                <ListItemDecorator><GitHub /></ListItemDecorator>
                <Typography>
                    2016 is so far away from now, and I lost the source code of the app, only APKs are spreading over the Internet. <br />
                    A disassembly & reimplementation is in progress.
                </Typography>
            </ListItem>
        </List>
    </>
}
