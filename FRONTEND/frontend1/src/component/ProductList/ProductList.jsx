import React, { useState, useEffect } from "react";

function ProductList() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
  console.log("useEffect");
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(adat => {
      console.log('ADAT OK');
      if (adat.products && adat.products.length > 0) {
        setData(adat.products);
      }
    })
    .catch(error => console.error('Fetch error:', error));
}, []);

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleFirst = () => {
    setIndex(0);
  };

  const handleLast = () => {
    setIndex(data.length - 1);
  };

  
//   if (!data.length) {
//     console.log('Loading...')
//     return <div>Loading...</div>;
//   }

const handleNextImage = () => {
  if (imageIndex < termek.images.length - 1) {
    setImageIndex(imageIndex + 1);
  }
};

const handlePrevImage = () => {
  if (imageIndex > 0) {
    setImageIndex(imageIndex - 1);
  }
};

let termek = data[index];

return (
  <div>
    <h1>Termékek</h1>
    {data.length > 0 && (
      <>
        <h2>{termek.title}</h2>
        <img src={termek.images[imageIndex]} alt={termek.title} />
        <div>
          <button onClick={handlePrevImage} disabled={imageIndex === 0}>Előző kép</button>
          <button onClick={handleNextImage} disabled={imageIndex === termek.images.length - 1}>Következő kép</button>
        </div>
        <p>{termek.description}</p>
        <p>{termek.price}</p>
        <div className="pagination">
          <button onClick={handleFirst} disabled={index === 0}>Első</button>
          <button onClick={handlePrev} disabled={index === 0}>Előző</button>
          <button onClick={handleNext} disabled={index === data.length - 1}>Következő</button>
          <button onClick={handleLast} disabled={index === data.length - 1}>Utolsó</button>
        </div>
      </>
    )}
  </div>
);

}

export default ProductList;