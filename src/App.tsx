import { Box, Stack } from '@mui/joy'
import './App.css'
import Header from './components/Header'

import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import ContactInfo from './components/ContactInfo'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {

  return (
    <Box sx={{ display: 'flex' }} alignContent="center" justifyContent="center">
      <Stack direction="column" sx={{
        maxWidth: '1200px',
      }}>
        <Header />
        <Portfolio />
        <Education />
        <Projects />
        <ContactInfo />
        <Footer />
      </Stack>
    </Box >
  )
}

export default App
