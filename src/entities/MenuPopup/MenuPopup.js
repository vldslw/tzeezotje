import './MenuPopup.css';
import { Link } from 'react-router-dom'; 

export const MenuPopup = ({isOpen}) => {
	return (
    <div className={`menu-popup ${isOpen ? "menu-popup_open" : ""}`}>
      <div className="menu-popup__container"> 
        <nav className='menu-popup__nav'>
          <Link to="/" className='menu-popup__nav-link'>
            À la carte
          </Link>
          <Link to="/" className='menu-popup__nav-link'>
            Wijnkaart
          </Link>
          <Link to="/" className='menu-popup__nav-link'>
            Lunchmenu
          </Link>
          <Link to="/" className='menu-popup__nav-link'>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};
