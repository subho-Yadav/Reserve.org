import {createBrowserRouter} from 'react-router-dom'

//Pages of my application
import Home from './pages/Home/Index'
import Hotels from './pages/Hotels/Index'
import Hotel from './pages/Hotel/Index'
import Admin from './pages/Admin/Index'

//Router 
const router=createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/hotels",
        element:<Hotels></Hotels>
    },
    {
        path:"/hotels/:hotelId",
        element:<Hotel></Hotel>
    },
    {
        path:"/admin",
        element:<Admin></Admin>
    },
])

export default router