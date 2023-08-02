import './Navigation.css';
import { Link } from 'react-router-dom'; 
import phoneIcon from './telephone.svg';


export const NavMenu = ({isMenuPopupOpen, handleMenuClick}) => {

	return (
    <nav className="header__nav">
			<Link to="/" className="header__nav-link">
				À la carte
      </Link>
			<Link to="/" className="header__nav-link">
				Wijnkaart
      </Link>
			<Link to="/" className="header__nav-link">
				Lunchmenu
      </Link>
			<Link to="/" className="header__nav-link">
				Contact
      </Link>
      <div className="header__nav-contacts">
					<img src={phoneIcon} className="header__nav-contacts-img" alt="Phone icon"/>
					<span className="header__nav-contacts-tel">+32 9 282 57 25</span>
			</div>
      
      <button 
      className={`header__nav-burger ${isMenuPopupOpen ? "header__nav-burger_close" : ""}`}
      onClick={handleMenuClick}
      />
		</nav>
  );
};
