import { Box, Stack, useColorScheme } from '@mui/joy'
import './App.css'
import Header from './components/Header'

import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import ContactInfo from './components/ContactInfo'
import Education from './components/Education'
import ArchivedProjects from './components/ArchivedProjects'
import { useEffect } from 'react'
import useDarkMode from './utils/is_darkmode'
import ActiveProjects from './components/ActiveProjects'

function App() {
  const isDarkMode = useDarkMode()
  const { setMode } = useColorScheme()

  // Sync dark mode with MUI
  useEffect(() => {
    setMode(isDarkMode ? 'dark' : 'light')
  }, [isDarkMode, setMode])

  return (
    <Box sx={{ display: 'flex' }} alignContent="center" justifyContent="center">
      <Stack direction="column" sx={{
        maxWidth: '1200px',
      }}>
        <Header />
        <Portfolio />
        <Education />
        <ActiveProjects />
        <ArchivedProjects />
        <ContactInfo />
        <Footer />
      </Stack>
    </Box >
  )
}

export default App
