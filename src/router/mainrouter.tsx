import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Landingpage from '../Pages/Landingpage/Landingpage'
import Events from '../Pages/Events/Events'

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landingpage /> }, // home page
      { path: "events", element: <Events /> },   // /events
    ],
  },
])
