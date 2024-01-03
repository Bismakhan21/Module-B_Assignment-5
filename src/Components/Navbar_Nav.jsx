import { NavList } from "./NavbarList.jsx"

const Navbar_Nav = ({ items }) => {
    return(
        <>

    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {items.map((item, index) => (
        <NavList key={index} link={item.link} text={item.text} />
      ))}
    </ul>
    </>
    );
};

export { Navbar_Nav };