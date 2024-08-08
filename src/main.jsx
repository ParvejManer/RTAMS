import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#ff4081',
//     },
//   },
// });


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <CssBaseline  />
    <App />
    </React.StrictMode>
)
