import React, { useState, useEffect } from 'react';
import FilmService from '../../src/services/FilmService';

export default function Films() {
  const [message, setMessage] = useState([]);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(
    {
      "rendezo": '',
      "cime": '',
      "ev": '',
      "nyelv": '',
      "hossz": '',
    });


  useEffect(() => {
    updateFilms();
  }, []);

  const updateFilms = () => {
    FilmService.getAll()
      .then(response => setFilms(response.data))
      .catch(error => setError(error.message));
  };

  // ----------------------------- INPUT CHANGE ----------------------------- //
  const handleInputChanges = event => {
  const { name, value } = event.target;
  setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
};

// ----------------------------- FORM SUBMIT ----------------------------- //
const handleSubmit = (e) => {
    e.preventDefault();
    const filmId = formData.id;
    console.log(filmId);
    if (filmId) {
      FilmService.update(filmId, formData)
        .then(response => {
          console.log(response);
          alert("Sikeres módosítás");
          setMessage("A változtatás sikerült");
          updateFilms();
        })
        .catch(error => {
          console.error(error);
          alert(`Hiba történt a módosítás során: ${error.message}`);
        });
    } else {
      FilmService.create(formData)
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
    }
  };  

// ----------------------------- DELETE ----------------------------- //
const handleDelete = (filmId) => {
  FilmService.remove(filmId)
    .then(response => {
      console.log(response);
      alert("Sikeres törlés");
      updateFilms();
    })
    .catch(error => {
      console.error(error);
      alert(`Hiba történt a törlés során: ${error.message}`);
    });
};

// ----------------------------- ACTIVE ROW ----------------------------- //
const handleTableRowClick = (film) => {
    setFormData({
      "id": film.id,
      "rendezo": film.rendezo,
      "cim": film.cim,
      "ev": film.ev,
      "nyelv": film.nyelv,
      "hossz": film.hossz,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rendezo">Rendező</label>
        <input onChange={handleInputChanges} type="text" name="rendezo" id="rendezo" value={formData.rendezo}/>
    </div>
  <div>
    <label htmlFor="cim">Film címe</label>
    <input onChange={handleInputChanges} type="text" name="cim" id="cim" value={formData.cim}/>
  </div>
  <div>
    <label htmlFor="ev">Éve</label>
    <input onChange={handleInputChanges} type="number" name="ev" id="ev" value={formData.ev}/>
  </div>
  <div>
    <label htmlFor="nyelv">Nyelv</label>
    <input onChange={handleInputChanges} type="text" name="nyelv" id="nyelv" value={formData.nyelv}/>
  </div>
  <div>
    <label htmlFor="hossz">Hossz</label>
    <input onChange={handleInputChanges} type="number" name="hossz" id="hossz" value={formData.hossz}/>
  </div>
  <input type="submit" value="Mentés" />
</form>

<div>
        <h1>Filmek ({films.length} film)</h1>
        {error ? (
          <div>Error fetching data: {error}</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Rendező</th>
                <th>Film címe</th>
                <th>Éve</th>
                <th>Nyelv</th>
                <th>Hossz</th>
                <th>Törlés</th>
              </tr>
            </thead>
            <tbody>
              {films.map(film => (
                <tr key={film.id} onClick={() => handleTableRowClick(film)}>
                  <td>{film.id}</td>
                  <td>{film.rendezo}</td>
                  <td>{film.cim}</td>
                  <td>{film.ev}</td>
                  <td>{film.nyelv}</td>
                  <td>{film.hossz}</td>
                  <td>{setMessage}</td>
                  <td>
                    <button onClick={() => handleDelete(film.id)}>Törlés</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
