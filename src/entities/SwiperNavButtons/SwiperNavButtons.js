import './SwiperNavButtons.css';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

	return (
    <div className="swiper__buttons">
       <button className="swiper__button swiper__button_prev" onClick={() => swiper.slidePrev()}></button>
       <button className="swiper__button swiper__button_next" onClick={() => swiper.slideNext()}></button>
    </div>
  );
};
