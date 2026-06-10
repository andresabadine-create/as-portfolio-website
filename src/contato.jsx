import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Layout from './components/Layout.jsx'
import Contato from './pages/Contato.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout current="contato">{(t) => <Contato t={t} />}</Layout>
  </StrictMode>,
)
