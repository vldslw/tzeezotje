import './MenuCard.css';
import dots from './dots.svg';

export const MenuCard = ({ title, firstItem, secondItem }) => {
	return (
    <div className="menu-card">
      <h1 className="menu-card__title">{title}</h1>
      <div className="menu-card__container">
        <p className="menu-card__item">{firstItem}</p>
        <img src={dots} className="menu-card__separator" alt="Separator"/>
        <p className="menu-card__item">{secondItem}</p>
      </div> 
    </div>
  );
};
