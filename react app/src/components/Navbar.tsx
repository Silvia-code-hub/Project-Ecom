import { useState } from 'react';   
import './Navbar.module.css';
import '@fortawesome/react-fontawesome';

const NavigationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
    <div className="navigation-dropdown">
      <button onClick={toggleDropdown}>
        Navigation
      </button>
      <h1>Hekto</h1>;

      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Pages</a>
        <a href="#">Products</a>
        <a href="#">Blog</a>
        <a href="#">Shop</a>
        <a href="#">Contact Us</a>
        
      </div>
    </div>
  );
};

export default NavigationDropdown;

/*<h1>Hekto</h1>
function Navbar(){
    return (
        
        <nav>
            <ul className= "dropdown">
                <li><a href= "/Home"> Home</a></li>
                <li><a href= "/Pages"> Pages</a></li>
                <li><a href= "/Products"> Products</a></li>
                <li><a href= "/Blog"> Blog</a></li>
                <li><a href= "/Shop">Shop</a></li>
                <li><a href= "/Contact"> Contact</a></li>
            </ul>
            <form>
                <input type="text"  id="Search box" />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>

        </nav>
    )
}
export default Navbar;*/