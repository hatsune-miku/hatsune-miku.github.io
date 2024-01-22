import sharedStyles from "./Shared.module.scss"
import { Box, Typography } from "@mui/joy"
export default function Projects() {
    return <>
        <Box className={sharedStyles.section} sx={{ flexDirection: 'column' }}>
            <Typography level="h1" color="primary">
                Recent Projects
            </Typography>

            Work in progress...
        </Box>
    </>
}
