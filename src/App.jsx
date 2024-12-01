import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Country from './Components/Country'
import Contact from './Components/Contact'
import AppLayout from './Components/AppLayout'
import ErrorPage from './Components/ErrorPage'
import CountryDetails from './Components/CountryDetails'

const App = () => {

  const router=createBrowserRouter( 
    [
      {
        path: '/',
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/about',
            element: <About/>
          },
          {
            path: '/country',
            element: <Country/>
          },

          {
            path: '/country/:id',
            element: <CountryDetails/>
          },

          {
            path:'contact',
            element: <Contact/>
          }
         ]
      }
    ]
  )

  return ( <RouterProvider router={router}/>)
}

export default App