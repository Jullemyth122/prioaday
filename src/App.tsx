import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import ErrorPage from './errors/ErrorPage'
import Help from './components/Help'


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/help",
      element: <Help/>,
      errorElement: <ErrorPage/>
    }
  ])


  return (
  <RouterProvider
    router={router}
  />)
}

export default App
