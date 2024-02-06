import sharedStyles from "./Shared.module.scss"
import { Box, Typography } from "@mui/joy"

export default function Footer() {
    return <div style={{ marginBottom: '24px' }}>
        <Box className={sharedStyles.section} sx={{
            flexDirection: 'column',
        }}>
            <Typography level="h3" color="primary">
                Thank you for visiting!
            </Typography>

            <Typography>
                This page was built with React, TypeScript, Vite, and JoyUI.
            </Typography>
        </Box>
    </div>
}
