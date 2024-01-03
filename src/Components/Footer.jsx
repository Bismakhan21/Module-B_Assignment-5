import { Logo } from './Logo'
import { Navbar_Nav } from './Navbar_Nav';
import { Search_icon } from './Search_icon';
import { SocialIcons } from './Social_icons';
import { Input } from './input';


const Footer = () => {

    const FooterList = [
        
        { link: '#', text: 'Shopping Cat' },
        { link: '#', text: 'Wishlist' },
        { link: '#', text: 'Checkout' },
        { link: '#', text: 'Support' },
      ];
    
      const FooterList2 = [
        { link: '#', text: 'About' },
        { link: '#', text: 'products' },
        { link: '#', text: 'Terms and Conditions' },
        { link: '#', text: 'Help Center' },
      ];

    return (
        <>
        <div className="footer">
            <div className="row">
                <div className="col ">
                 <Logo />
                 <p>Follow us:</p>
                 <SocialIcons />
                </div>

                <div className="col">
                <h5>USEFUL LINK</h5>
                <Navbar_Nav items={FooterList}/>
                </div>

                <div className="col">
                <h5>ABOUT US</h5>
                <Navbar_Nav items={FooterList2} />
                </div>

                <div className="col">
                <h5>NEWSLETTER</h5>
                <p>Subscribe to get all new updates</p>
                    <div className='input'>    
                    <Input />
                    <Search_icon />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export { Footer };