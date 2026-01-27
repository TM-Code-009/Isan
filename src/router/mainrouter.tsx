import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Landingpage from '../Pages/Landingpage/Landingpage'
import Events from '../Pages/Events/Events'
import AGMCalender from '../Pages/AGMCalender/AGMCalender'
import Membership from '../Pages/Membership/Membership'
import Libary from '../Pages/Libary/Libary'
import Rentspace from '../Pages/Rentspace/Rentspace'

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "events", element: <Events /> },   
      { path: "agmcalender", element: <AGMCalender /> },  
      { path: "membership", element: <Membership /> },  
      { path: "libary", element: <Libary /> },  
      { path: "rentspace", element: <Rentspace /> },  
    ],
  },
])
