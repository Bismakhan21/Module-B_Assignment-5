import { Logo } from "./Components/Logo";
import { ToggleBtn } from "./Components/ToggleBtn";
import { Cart_icon } from "./Components/carticon";
import { Usericon } from "./Components/user";
import { WishList } from "./Components/wishlist";
import { Navbar_Nav } from "./Components/Navbar_Nav.jsx"
import { Pro_1 } from "./Components/pro-1.jsx";


const ProductDetail = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Logo />
          <ToggleBtn />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
             <Navbar_Nav items={navLists} />

              <div className='search'>
                <WishList />
                <Usericon />
                <button>
                <span>$240</span>
                <Cart_icon />
                </button>
              </div>
            
            </div>
         </div>
        </nav>

        <Pro_1 />
      </>
    );
};
        
export { ProductDetail };

