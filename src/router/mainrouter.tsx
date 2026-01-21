import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Landingpage from '../Pages/Landingpage/Landingpage'
import Events from '../Pages/Events/Events'
import AGMCalender from '../Pages/AGMCalender/AGMCalender'

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "events", element: <Events /> },   
      { path: "agmcalender", element: <AGMCalender /> },  
    ],
  },
])
