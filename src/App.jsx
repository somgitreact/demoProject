import './App.css';
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

import Blog from './screen/blog/Blog';
import Cart from './screen/cart/Cart';
import ContactUs from './screen/contactus/ContactUs';
import BellingDetails from './screen/belllingDate/BellingDetails';       
import Home from './screen/home/Home';
import ProductDetails from './screen/productDetails/ProductDetails';
import AppLayout from './AppLayout';
import ShopPage from './screen/shopPage/ShopPage';
import Registration from './screen/user/Registration';
import Login from './screen/user/Login';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      
      children: [
        { element: <Home />, path: '/' },
        { element: <ProductDetails />, path: '/productdetails',
          children: [
            {element:<ProductDetails/>, path:":proid"}
          ]
         },
        { element: <BellingDetails />, path: '/bellingdetails' },
        { element: <Blog />, path: '/blog' },
        { element: <ContactUs />, path: '/contactus' },
        { element: <Cart />, path: '/cart' },
        { element: <ShopPage/>, path:'/shoppage'},
        { element: <Registration />, path:'registarion'},
        { element: <Login />, path:'login'}
      ]
    }
  ]);

  return (
    <PrimeReactProvider>
    
    
      <RouterProvider router={router} />
     
     
    </PrimeReactProvider>
  );
}

export default App;
