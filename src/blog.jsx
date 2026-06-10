import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Layout from './components/Layout.jsx'
import Blog from './pages/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout current="blog">{(t) => <Blog t={t} />}</Layout>
  </StrictMode>,
)
