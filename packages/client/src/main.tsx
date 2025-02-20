import { createRoot } from 'react-dom/client'
import RoutesManager from './ui/routes/routes-manager'
import { RepositoriesProvider } from './core'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
    <RepositoriesProvider>
      <RoutesManager />
      <Toaster
        position="bottom-left"
        toastOptions={{duration: 7000}}
      />
    </RepositoriesProvider>
)
