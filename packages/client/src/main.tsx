import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesManager from './ui/routes/routes-manager'
import { RepositoriesProvider } from './core'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RepositoriesProvider>
      <RoutesManager />
      <Toaster
        position="bottom-left"
        toastOptions={{duration: 7000}}
      />
    </RepositoriesProvider>
  </StrictMode>,
)
