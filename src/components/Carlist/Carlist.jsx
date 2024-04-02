
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/operations';
import { actions as carActions } from '../../redux/carsSlice';
import Modal from '../Modal/Modal';
// import s from './Carlist.module.css'

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.cars);
  const favorites = useSelector(state => state.cars.favorites);
  const makes = useSelector(state => state.cars.makes);
  const itemsToShow = useSelector(state => state.cars.itemsToShow);
  const selectedCar = useSelector(state => state.cars.selectedCar);
  const selectedMake = useSelector(state => state.cars.selectedMake);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleFavoriteClick = (car) => {
    if (isFavorite(car)) {
      dispatch(carActions.removeFavorite(car));
    } else {
      dispatch(carActions.addFavorite(car));
    }
  };

  const isFavorite = (car) => {
    return favorites.some(favorite => favorite.id === car.id);
  };

  const openModal = (car) => {
    dispatch(carActions.setSelectedCar(car));
  };

  const closeModal = () => {
    dispatch(carActions.setSelectedCar(null));
  };

  const handleMakeChange = (event) => {
    dispatch(carActions.setSelectedMake(event.target.value));
  };

  const filteredCars = cars.filter(car => selectedMake === '' || car.make === selectedMake);

  const uniqueMakes = Array.from(new Set(makes));

  return (
    <div>
      <select value={selectedMake} onChange={handleMakeChange}>
        <option value="">All Makes</option>
        {uniqueMakes.map(make => <option key={make} value={make}>{make}</option>)}
      </select>
      {filteredCars && filteredCars.slice(0, itemsToShow).map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={`${item.make} ${item.model}`} />
          <h2>{item.make} <span>{item.model}</span>, {item.year} ${item.rentalPrice}</h2>
          <div> 
            <ul>
              <li>{item.address.split(',')[1]} <span/></li>
              <li>{item.address.split(',')[2]} <span /></li>
              <li>{item.rentalCompany} <span /></li>
              <li>{item.type} <span /></li>
              <li>{item.model} <span /></li>
              <li>{item.mileage} <span /></li>
              <li>{item.accessories[0]}</li>
            </ul>
          </div>
          <button onClick={() => handleFavoriteClick(item)}>
            {isFavorite(item) ? 'Remove from favorites' : 'Add to favorites'}
          </button>
          <button onClick={() => openModal(item)}>Learn more</button>
        </div>
      ))}
      <button onClick={() => dispatch(carActions.setItemsToShow(itemsToShow + 12))}>Load more</button>
      {selectedCar && <Modal car={selectedCar} onClose={closeModal} />}
    </div>
  );
}

export default CarList;


























