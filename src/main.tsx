import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import '@fontsource/inter'
import { CssVarsProvider, StyledEngineProvider, extendTheme } from '@mui/joy'

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "solidBg": "rgb(207, 105, 152)",
          "solidHoverBg": "rgb(247, 140, 170)",
          "solidActiveBg": "rgb(247, 105, 152)",
          "plainColor": "rgb(207, 105, 152)",
          "mainChannel": "rgb(207, 105, 152)",
        },
        "neutral": {
          "solidBg": "rgb(100, 149, 237)",
          "solidHoverBg": "rgb(135, 206, 250)",
          "solidActiveBg": "rgb(30, 144, 255)",
          "plainColor": "rgb(207, 105, 152)",
          "mainChannel": "rgb(207, 105, 152)",
        }
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "solidBg": "rgb(207, 105, 152)",
          "solidHoverBg": "rgb(247, 140, 170)",
          "solidActiveBg": "rgb(247, 105, 152)",
          "plainColor": "rgb(207, 105, 152)",
          "mainChannel": "rgb(207, 105, 152)",
        },
        "neutral": {
          "solidBg": "rgb(100, 149, 237)",
          "solidHoverBg": "rgb(135, 206, 250)",
          "solidActiveBg": "rgb(30, 144, 255)",
          "plainColor": "rgb(207, 105, 152)",
          "mainChannel": "rgb(207, 105, 152)",
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme}>
        <App />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
