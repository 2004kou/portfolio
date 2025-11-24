import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from "./main.module.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render
(
  <StrictMode className="relative w-5/5 !mx-auto">
    <App />
  </StrictMode>,
)
