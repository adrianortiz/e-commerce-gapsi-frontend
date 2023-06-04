import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Agregar imports
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios'

import './index.css'

// Usar axios de manera global
window.axios = axios

// Url del back-end
window.axios.defaults.baseURL = 'http://localhost:8081'
// Headers por defecto
window.axios.defaults.headers.common['Accept'] = 'application/json'
window.axios.defaults.headers.common['Contect-Type'] = 'application/json'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// Indicar a Axios que no usaremos credenciales
window.axios.defaults.withCredencials = false

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
