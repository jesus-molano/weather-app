import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LocationProvider } from './contexts/LocationProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>,
)
