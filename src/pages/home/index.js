import './index.css';
import { Link } from 'react-router-dom'; 
import logo from './images/logo.svg';
import phoneIcon from './icons/telephone.svg';
import facebookButton from './icons/fbButton.svg';
import instagramButton from './icons/igButton.svg';
import twitterButton from './icons/twButton.svg';
import youtubeButton from './icons/ytButton.svg';
import { useState } from "react"; 
import { Navigation } from '../../entities/Navigation/Navigation';
import { MenuPopup } from '../../entities/MenuPopup/MenuPopup';

export const HomePage = () => {

	const [isMenuPopupOpen, setMenuPopupOpen] = useState(false); 

  function handleMenuClick() { 
    setMenuPopupOpen(!isMenuPopupOpen); 
  } 

	return (
		<div className="page">
			<header className="header">
				<section className="header__nav-bar">
					<img className="header__logo" src={logo} alt="Tzeezotje logo"/>
					<Navigation 
					isMenuPopupOpen={isMenuPopupOpen} 
					handleMenuClick={handleMenuClick}
					/>
				</section>
				<MenuPopup 
        		isOpen={isMenuPopupOpen}
          />
				<div className="header__contacts">
					<img src={phoneIcon} className="header__contacts-img" alt="Phone icon"/>
					<span className="header__contacts-tel">+32 9 282 57 25</span>
				</div>
				<p className="header__hours">Open everyday 6AM - 9PM</p>
				<h1 className="header__title">A bad day with lunch is better than a good day without it.</h1>
				<div class="header__button-wrapper">
				  <button className="header__button">Reserve a table</button>
        </div>
				<ul className="header__links">
					<li className="header__links-item"><a href="https://tzeezotje.be/" className="header__link"><img src={facebookButton} className="header__link-img" alt="Facebook"/></a></li>
					<li className="header__links-item"><a href="https://tzeezotje.be/" className="header__link"><img src={instagramButton} className="header__link-img" alt="Instagram"/></a></li>
					<li className="header__links-item"><a href="https://tzeezotje.be/" className="header__link"><img src={twitterButton} className="header__link-img" alt="Twitter"/></a></li>
					<li className="header__links-item"><a href="https://tzeezotje.be/" className="header__link"><img src={youtubeButton} className="header__link-img" alt="YouTube"/></a></li>
				</ul>
			</header>
			<main className="content">
			  <section className="menu" aria-label="Menu section">
				</section>
				<section className="clients" aria-label="Client reviews section">
				</section>
			</main>
		</div>
	);
};
