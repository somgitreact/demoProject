import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { userCartContext } from "../context/CartContext"
import { userContext } from "../context/Auth";



const Header = () => {

const{ num } = useContext(userCartContext);
const{ currentuser, Logout} = useContext(userContext);
//console.log("!!!!!!!!!!", currentuser);

  return (
    <header className="flex flex-col items-center  w-full max-md:max-w-full">

    <div className="self-stretch px-16 py-8 w-full max-md:px-5 max-md:max-w-full">

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-between">

        <div className="flex flex-col  max-md:ml-0 max-md:w-full">

          <div className="flex grow justify-center items-center max-md:mt-10">

            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae684d5f8f8629a66a0737897093eaec53d0bfb13bd61b89cb36623bceb94d9b?apiKey=726938d2862b4defb03430bff0a5f2a6&" alt="Company logo" className="aspect-[4.55] w-[185px]" />

          </div>

        </div>

        <nav className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">

          <ul className="flex gap-12 justify-between self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">

            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/shoppage">Shop</NavLink></li>
            {currentuser.name &&  <li> <NavLink to="/cart">Cart Page</NavLink></li>}
            <li> <NavLink to="/blog">Blog</NavLink></li>
            <li> <NavLink to="/contactus">ContactUs</NavLink></li>
           
            {  !currentuser.name && <> <li> <NavLink to="/login">Login</NavLink></li><li> <NavLink to="/registarion">Registarion</NavLink></li></>
            
            
            }
           

          </ul>

        </nav>

        <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">

          <div className="flex gap-8 justify-between self-stretch my-auto max-md:mt-10">
<NavLink to={  !currentuser.name && "/login"  } className=" flex items-center gap-3 "> {!currentuser.name ? "Welcome Gust" : "Welcome " + currentuser.name }
              <img loading="lazy" src="/img/user.png" alt="" className="shrink-0 w-7 aspect-square" />
</NavLink>
{currentuser.name && <button onClick={Logout}> Logout </button> }


            

           
            <a href="#" aria-label="Social media link">
            {num}
              <img loading="lazy" src="/img/cart.png" alt="" className="shrink-0 w-7 aspect-square" />

            </a>

          </div>

        </div>

      </div>

    </div>
 </header>
  )
}

export default Header