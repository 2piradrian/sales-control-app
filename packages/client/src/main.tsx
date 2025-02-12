import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesManager from './ui/routes/routes-manager'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesManager />
  </StrictMode>,
)
