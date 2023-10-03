import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "./theme"
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
