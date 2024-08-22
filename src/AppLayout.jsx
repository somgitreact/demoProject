
import Footer from '../src/component/Footer'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Auth from './context/Auth'
import CartContext from './context/CartContext'
const AppLayout = () => {
  return (
    <section className="flex flex-col bg-white w-full">
<Auth>
  <CartContext>
 <Header/>

<Outlet/>

<Footer/>
</CartContext>
</Auth>
</section>
  )
}

export default AppLayout