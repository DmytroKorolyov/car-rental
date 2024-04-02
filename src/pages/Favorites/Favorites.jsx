import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector(state => state.cars.favorites);

  return (
    <div>
      {favorites.map((item, index) => (
        <div key={index}>
          <h2>{item.make} {item.model}</h2>
          <img src={item.img} alt={`${item.make} ${item.model}`} />
          <p>{item.description}</p>
          <p>Year: {item.year}</p>
          <p>Type: {item.type}</p>
          <p>Engine Size: {item.engineSize}</p>
          <p>Fuel Consumption: {item.fuelConsumption}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;



