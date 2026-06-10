import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Layout from './components/Layout.jsx'
import Projetos from './pages/Projetos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout current="projetos">{(t) => <Projetos t={t} />}</Layout>
  </StrictMode>,
)
