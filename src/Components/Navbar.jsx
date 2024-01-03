import { Logo } from "./Logo";
import { Navbar_Nav } from "./Navbar_Nav";
import { Search_icon } from "./Search_icon";
import { ToggleBtn } from "./ToggleBtn";
import { Cart_icon } from "./carticon";


const Navbar = () => {

    const navLists = [
        { link: '#', text: 'Home' },
        { link: '#', text: 'Shop' },
        { link: '#', text: 'Men' },
        { link: '#', text: 'Pages' },
        { link: '#', text: 'Blog' },
        { link: '#', text: 'Contact' },
      ];

    return (
     <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Logo />
          <ToggleBtn />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <Navbar_Nav items={navLists} />

              <div className='search'>
                <button>
                <Cart_icon />
                <span>2 Items</span>
                </button>
              <Search_icon />
              </div>
            
            </div>
         </div>
        </nav>
        </>   
    );
};

export { Navbar };