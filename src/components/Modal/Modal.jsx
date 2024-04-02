import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ car, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleBackdropClick} style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div style={{ backgroundColor: 'white', padding: '1em', maxWidth: '90%', maxHeight: '90%', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ float: 'right' }}>X</button>
        <img src={car.img} alt={`${car.make} ${car.model}`} />
              <h2>{car.make} {car.model}, {car.year}</h2>
              <div> 
          <ul>
            <li>{car.address.split(',')[1]} <span/></li>
            <li>{car.address.split(',')[2]} <span /></li>
            <li>{car.rentalCompany} <span /></li>
            <li>{car.type} <span /></li>
            <li>{car.model} <span /></li>
            <li>{car.mileage} <span /></li>
            <li>{car.accessories[0]}</li>
          </ul>
        </div>
              <p>{car.description}</p>
              <p>Accessories and functionalities: { car.accessories}</p>



        <p>Type: {car.type}</p>
        <p>Engine Size: {car.engineSize}</p>
        <p>Fuel Consumption: {car.fuelConsumption}</p>
        <p>Mileage: {car.mileage.toLocaleString('en-US')}</p> 
        <a href="tel:+380730000000"><button>Rental car</button></a>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;














