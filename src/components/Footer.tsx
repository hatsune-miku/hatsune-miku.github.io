import sharedStyles from "./Shared.module.scss"
import { Box, Typography } from "@mui/joy"

export default function Footer() {
    return <>
        <Box className={sharedStyles.section} sx={{
            flexDirection: 'column',
        }}>
            <Typography level="h3" color="primary">
                This portfolio is built with React, TypeScript, Vite, and JoyUI.
            </Typography>
        </Box>
    </>
}
