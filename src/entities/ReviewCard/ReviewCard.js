import './ReviewCard.css';
import reviewImg from './reviewImg.svg';

export const ReviewCard = ({title, text, author}) => {
	return (
    <div className="review-card">
      <img src={reviewImg} className="review-card__img" alt="Quotation marks"></img>
      <h1 className="review-card__title">{title}</h1>
      <p className="review-card__text">{text}</p>
      <p className="review-card__author">{author}</p>
    </div>
  );
};
