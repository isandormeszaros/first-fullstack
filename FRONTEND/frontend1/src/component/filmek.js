import React, { useState, useEffect } from 'react';
import FilmService from '../../src/services/FilmService';

export default function Films() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    updateFilms();
  }, []);

  const updateFilms = () => {
    FilmService.getAll()
      .then(response => setFilms(response.data))
      .catch(error => setError(error.message));
  };

  const handleInputChanges = event => {
  const { name, value } = event.target;
  setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
};

  const handleSubmit = (e) => {
  e.preventDefault();
  FilmService.create((formData))
    .then(response => {
      console.log(response);
      alert("Sikerült");
      updateFilms();
    })
    .catch(error => {
      console.error(error);
      alert(`Hiba történt a mentés során: ${error.message}`);
      console.log(error.response.data);
    });
};


  return (
    <>
      <div>{JSON.stringify(formData)}</div>
      <form onSubmit={handleSubmit}>
      <div>
    <label htmlFor="rendezo">Rendező</label>
    <input onChange={handleInputChanges} type="text" name="rendezo" id="rendezo" />
  </div>
  <div>
    <label htmlFor="cim">Film címe</label>
    <input onChange={handleInputChanges} type="text" name="cim" id="cim" />
  </div>
  <div>
    <label htmlFor="ev">Éve</label>
    <input onChange={handleInputChanges} type="number" name="ev" id="ev" />
  </div>
  <div>
    <label htmlFor="nyelv">Nyelv</label>
    <input onChange={handleInputChanges} type="text" name="nyelv" id="nyelv" />
  </div>
  <div>
    <label htmlFor="hossz">Hossz</label>
    <input onChange={handleInputChanges} type="number" name="hossz" id="hossz" />
  </div>
  <input type="submit" value="Mentés" />
</form>

      <div>
        <h1>Filmek ({films.length} film)</h1>
        {error ? (
          <div>Error fetching data: {error}</div>
        ) : (
          films.map(film => (
            <div key={film.id}>
              {film.rendezo} : {film.cim}
            </div>
          ))
        )}
      </div>
    </>
  );
}
