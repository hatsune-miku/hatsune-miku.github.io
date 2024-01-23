import sharedStyles from "./Shared.module.scss"
import { Box, Button, Stack, Typography, useColorScheme } from "@mui/joy"

export default function Footer() {
    const { mode, setMode } = useColorScheme()

    function handleToggle() {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

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
