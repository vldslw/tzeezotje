import './FormPopup.css';
import { useState } from "react";

export const FormPopup = ({ isOpen, onClose, onSubmit }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSizeChange(e) {
    setSize(e.target.value);
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
		onSubmit({ name, email, size });
  }

  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Reserve a table</h2>
        <form
          className="popup__form"
          onSubmit={handleSubmit}
          name="order"
        > 
          <input
            type="text"
            value={name ?? ''}
            onChange={handleNameChange}
            id="name"
            name="name"
            className="popup__input"
            placeholder="Name"
            required
           />
           <input
            type="text"
            value={email ?? ''}
            onChange={handleEmailChange}
            id="email"
            name="email"
            className="popup__input"
            placeholder="Email"
            required
           />
           <input
            type="number"
            value={size ?? 1}
            onChange={handleSizeChange}
            id="size"
            name="size"
            className="popup__input"
            placeholder="Reservation Size"
            min="1" 
            max="12"
            required
           />
          <button type="submit" className="popup__submit-button">
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
}
