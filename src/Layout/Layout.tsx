import { Outlet } from 'react-router-dom'
import Header from '../Pages/static/Header'
import Footer from '../Pages/static/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout