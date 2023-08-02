import './Navigation.css';
import { Link } from 'react-router-dom'; 


export const NavMenu = ({isMenuPopupOpen, handleMenuClick}) => {

	return (
    <nav className="header__nav">
			{/* <Link to="/" className="header__nav-link">
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
      </Link> */}
      <button 
      className={`header__nav-burger ${isMenuPopupOpen ? "header__nav-burger_close" : ""}`}
      onClick={handleMenuClick}
      />
		</nav>
  );
};
