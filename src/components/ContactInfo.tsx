import sharedStyles from "./Shared.module.scss"
import { Box, Link, List, ListItem, ListItemDecorator, Typography } from "@mui/joy"
import { Email, GitHub, LinkedIn, Person, Phone } from "@mui/icons-material"

export default function ContactInfo() {
    return <>
        <Box className={sharedStyles.section} sx={{ flexDirection: 'column' }}>
            <Typography level="h1" color="primary">
                Contact Information
            </Typography>

            <List>
                <ListItem>
                    <ListItemDecorator><Person /></ListItemDecorator>
                    <Typography>Zhen (Brian) Guan</Typography>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><Email /></ListItemDecorator>
                    <Link href="mailto:zguan@mun.ca">
                        zguan@mun.ca
                    </Link>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><Phone /></ListItemDecorator>
                    <Link href="tel:+17092224031">
                        (709) 222-4031
                    </Link>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><LinkedIn /></ListItemDecorator>
                    <Link href="https://www.linkedin.com/in/brian-guan">
                        linkedin.com/in/brian-guan
                    </Link>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><GitHub /></ListItemDecorator>
                    <Link href="https://github.com/hatsune-miku">
                        github.com/hatsune-miku
                    </Link>
                </ListItem>
            </List>
        </Box>
    </>
}
