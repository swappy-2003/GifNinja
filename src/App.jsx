

import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/App-layout'
import Categories from './pages/Categories'
import Favourites from './pages/Favourites'
import Search from './pages/Search'
import Home from './pages/Home'
import Singlegif from './pages/Single-gif'




// homepage
//categories
//search
//single gif
// favourites
const router= createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Categories',
        element:<Categories/>
      },
      {
        path:'/Favourites',
        element:<Favourites/>
      },
      {
        path:'/:type/:slug',
        element:<Singlegif/>
      },
      {
        path:'/Search/:query',
        element:<Search/>
      }
    ]
  }
])
function App() {
  

  return (
    <RouterProvider router={router} />
   

   
  )
}

export default App
