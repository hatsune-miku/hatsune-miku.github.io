import { Box, Stack, useColorScheme } from "@mui/joy"
import Header from "./components/Header"

import { useEffect } from "react"
import useSystemDarkMode from "./utils/is_darkmode"
import "./App.css"

function App() {
  const isDarkMode = useSystemDarkMode()
  const { setMode } = useColorScheme()

  // Sync dark mode with MUI
  useEffect(() => {
    setMode(isDarkMode ? "dark" : "light")
  }, [isDarkMode, setMode])

  return (
    <Box sx={{ display: "flex" }} alignContent="center" justifyContent="center">
      <Stack
        direction="column"
        sx={{
          maxWidth: "1200px",
        }}
      >
        <Header />
      </Stack>
    </Box>
  )
}

export default App
