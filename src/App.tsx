import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Layout from './Layout'
import ErrorPage from './errors/ErrorPage'
import Help from './components/Help'
import Home from './components/Home'


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/>
    },
    {
      path:"/home",
      element:(
        <Home />
      ),
      errorElement:<ErrorPage/>
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
