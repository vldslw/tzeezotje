import './index.css';
import { Link } from 'react-router-dom'; 
import logo from './images/logo.svg';
import facebookButton from './icons/fbButton.svg';
import instagramButton from './icons/igButton.svg';
import twitterButton from './icons/twButton.svg';
import youtubeButton from './icons/ytButton.svg';
import MenuBackground from './images/menuBackgroundImg.svg';
import menuPhoto1 from './images/menuPhoto1.png';
import menuPhoto2 from './images/menuPhoto2.png';
import { useState } from "react"; 
import { NavMenu } from '../../entities/Navigation/Navigation';
import { MenuPopup } from '../../entities/MenuPopup/MenuPopup';
import { FormPopup } from '../../entities/FormPopup/FormPopup'
import { submitReserve } from '../../shared/api/submitreserve';
import { ReviewCard } from '../../entities/ReviewCard/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperNavButtons } from '../../entities/SwiperNavButtons/SwiperNavButtons';
import { MenuCard } from '../../entities/MenuCard/MenuCard';
import 'swiper/css/bundle';

export const HomePage = () => {

	const [isMenuPopupOpen, setMenuPopupOpen] = useState(false); 
	const [isFormPopupOpen, setFormPopupOpen] = useState(false);

  function handleMenuClick() { 
    setMenuPopupOpen(!isMenuPopupOpen); 
  } 

	function handleFormClick() {
		setFormPopupOpen(true);
	}

	function closeFormPopup() {
		setFormPopupOpen(false);
	}

	function onSubmit({ name, email, size }) {
		return submitReserve({ name, email, size })
		.then((res) => {
			setFormPopupOpen(false);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
	}

	return (
		<div className="page">
			<header className="header">
				<section className="header__nav-bar">
					<img className="header__logo" src={logo} alt="Tzeezotje logo"/>
					<NavMenu 
					isMenuPopupOpen={isMenuPopupOpen} 
					handleMenuClick={handleMenuClick}
					/>
				</section>
				<MenuPopup 
        		isOpen={isMenuPopupOpen}
        />
				
				<p className="header__hours">Open everyday 6AM - 9PM</p>
				<h1 className="header__title">A bad day with lunch is better than a good day without it.</h1>
				<div className="header__lower-section">
					<div className="header__button-wrapper">
				 	 <button 
							className="header__button"
							onClick={handleFormClick}
						>
							Reserve a table
						</button>
       	 </div>
					<ul className="header__links">
						<li className="header__links-item"><a href="https://vldslw.github.io/tzeezotje/" className="header__link"><img src={facebookButton} className="header__link-img" alt="Facebook"/></a></li>
						<li className="header__links-item"><a href="https://vldslw.github.io/tzeezotje/" className="header__link"><img src={instagramButton} className="header__link-img" alt="Instagram"/></a></li>
						<li className="header__links-item"><a href="https://vldslw.github.io/tzeezotje/" className="header__link"><img src={twitterButton} className="header__link-img" alt="Twitter"/></a></li>
						<li className="header__links-item"><a href="https://vldslw.github.io/tzeezotje/" className="header__link"><img src={youtubeButton} className="header__link-img" alt="YouTube"/></a></li>
					</ul>
				</div>
				<FormPopup 
					isOpen={isFormPopupOpen}
					onClose={closeFormPopup}
					onSubmit={onSubmit}
				/>
			</header>
			<main className="content">
			  <section className="menu" aria-label="Menu section">
					<div className="menu__cards">
						<MenuCard 
							title={'Woensdag 12/01'} 
							firstItem={'Salade met Serrano'} 
							secondItem={'Steak Tartaar'}
						/>
						<MenuCard 
							title={'Donderdag 13/01'} 
							firstItem={'Toast Roquefort'} 
							secondItem={'Penne met Kip en Prei'}
						/>
						<MenuCard 
							title={'Vrijdag 14/01'}	
							firstItem={'Verrassing van de Chef'} 
							secondItem={'Penne met Kip en Prei'}
						/>
						<MenuCard 
							title={'Vrijdag 15/01'} 
							firstItem={'Verrassing van de Chef'} 
							secondItem={'Penne met Kip en Prei'}
						/>
						<MenuCard 
							title={'Vrijdag 16/01'} 
							firstItem={'Verrassing van de Chef'} 
							secondItem={'Penne met Kip en Prei'}
						/>
					</div>
					<div className="menu__images">
						<div className="menu__image-background">
							<img src={menuPhoto1} className="menu__image-photo menu__image-photo_first" alt="" />
							<img src={menuPhoto2} className="menu__image-photo menu__image-photo_second" alt="" />
						</div>
					</div>
				</section>
				<section className="clients" aria-label="Client reviews section">
					<Swiper 
						modules={[Navigation, Pagination]}
      			spaceBetween={0}
      			slidesPerView={1}
      			onSlideChange={() => console.log('slide change')}
      			onSwiper={(swiper) => console.log(swiper)}
    			>
      			<SwiperSlide>
							<ReviewCard 
							title={'Goede service, lekker eten, toffe ambiance'}
							text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo  dolores et ea rebum. Stet clita kasd gubergren.'}
							author={'Alain Heyndrickx'}
							/>
						</SwiperSlide>
      			<SwiperSlide>
							<ReviewCard 
							title={'Toffe ambiance, lekker eten, goede service'}
							text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo  dolores et ea rebum. Stet clita kasd gubergren.'}
							author={'Heyndrickx Alain'}
							/>
						</SwiperSlide>
						<SwiperNavButtons />
    			</Swiper>
				</section>
			</main>
		</div>
	);
};
