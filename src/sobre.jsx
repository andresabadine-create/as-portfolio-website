import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Layout from './components/Layout.jsx'
import Sobre from './pages/Sobre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout current="sobre">{(t) => <Sobre t={t} />}</Layout>
  </StrictMode>,
)
