import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { router } from '../routes/router.jsx'
import { Provider } from 'react-redux'
import store from '../store/store.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
</StrictMode>,
)