import React, { useState, useEffect } from "react";

function ProductList() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(adat => setData(adat.products));
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

  if (!data.length) {
    return <div>Loading...</div>;
  }

  let termek = data[index];

  return (
    <div>
      <h1>Termékek</h1>
      <h2>{termek.title}</h2>
      <p>{termek.description}</p>
      <p>{termek.price}</p>

      <div className="pagination">
        <button onClick={handleFirst} disabled={index === 0}>Első</button>
        <button onClick={handlePrev} disabled={index === 0}>Előző</button>
        <button onClick={handleNext} disabled={index === data.length - 1}>Következő</button>
        <button onClick={handleLast} disabled={index === data.length - 1}>Utolsó</button>
      </div>
    </div>
  );
}

export default ProductList;
