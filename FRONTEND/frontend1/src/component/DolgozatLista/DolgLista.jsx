import React, { useState } from 'react';
import './dolglista.css'

const filterableData = [
    {
        name: "nature",
        src: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Mountains",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "cars",
        src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "BMW",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "people",
        src: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Modeller",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "nature",
        src: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Sea Life",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "cars",
        src: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Lamborghini",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "people",
        src: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Artist",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "nature",
        src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
        title: "Forest",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "cars",
        src: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Benz",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "people",
        src: "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Saxophonist",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

const DolgLista = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = filter === 'all' ? filterableData : filterableData.filter(item => item.name === filter);

  return (
    <div className='all-container'>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('all')}>Összes</button>
        <button onClick={() => handleFilterChange('nature')}>Természet</button>
        <button onClick={() => handleFilterChange('cars')}>Autók</button>
        <button onClick={() => handleFilterChange('people')}>Emberek</button>
      </div>

      <div className="card-container">
        {filteredData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.src} alt={item.title} />
            <h3 className='card-title'>{item.title}</h3>
            <p className='card-text'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default DolgLista;

