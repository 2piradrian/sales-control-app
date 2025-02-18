import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesManager from './ui/routes/routes-manager'
import { RepositoriesProvider } from './core'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RepositoriesProvider>
      <RoutesManager />
    </RepositoriesProvider>
  </StrictMode>,
)
