import './MenuPopup.css';
import { Link } from 'react-router-dom'; 
import phoneIcon from './telephone.svg';

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
          <div className="menu-popup__nav-contacts">
					  <img src={phoneIcon} className="menu-popup__nav-contacts-img" alt="Phone icon"/>
					  <span className="menu-popup__nav-contacts-tel">+32 9 282 57 25</span>
			    </div>
        </nav>
      </div>
    </div>
  );
};
