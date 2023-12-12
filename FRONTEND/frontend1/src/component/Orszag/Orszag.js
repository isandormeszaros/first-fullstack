import React, { useState } from 'react';
import './orszag.css'

const countries = [
  {
    "orszag": "Magyarország",
    "fovaros": "Budapest",
    "kep" : "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Magyarország közép-európai ország, amely híres történelmi városairól és természeti szépségeiről."
  },
  {
    "orszag": "Spanyolország",
    "fovaros": "Madrid",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Spanyolország a Pirineusok és a Földközi-tenger között fekvő ország, amely híres a flamenco táncról és a corrida bikaviadalról."
  },
  {
    "orszag": "Franciaország",
    "fovaros": "Párizs",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Franciaország a világ egyik legnépszerűbb turisztikai célpontja, híres kultúrájáról, gasztronómiájáról és művészetéről."
  },
  {
    "orszag": "Olaszország",
    "fovaros": "Róma",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Olaszország híres a történelmi városairól, a pizzáról, a tésztáról és a művészeti örökségéről."
  },
  {
    "orszag": "Németország",
    "fovaros": "Berlin",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Németország a közép-európai ország, amely híres a kastélyairól, söreiről és autóiparáról."
  },
  {
    "orszag": "Egyesült Királyság",
    "fovaros": "London",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Az Egyesült Királyság híres történelmi emlékeiről, kultúrájáról és a királyi családról."
  },
  {
    "orszag": "Oroszország",
    "fovaros": "Moszkva",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Oroszország a világ legnagyobb területű országa, amely híres a Kremlről, a Vörös térről és a művészeti hagyományairól."
  },
  {
    "orszag": "Kína",
    "fovaros": "Peking",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Kína a világ egyik legnépesebb országa, amely híres a Nagy Falról, a kínai konyháról és a hagyományos kínai medicináról."
  },
  {
    "orszag": "Japán",
    "fovaros": "Tokió",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Japán a technológia és a hagyományok találkozásának helye, híres kertjeiről, templomairól és szigetországáról."
  },
  {
    "orszag": "Ausztrália",
    "fovaros": "Canberra",
    "kep" : "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    "leiras": "Ausztrália híres a kengurukról, a bozótos területeiről és a lenyűgöző tengerpartjairól."
  }
];

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.orszag}</h2>
      <p>Capital: {country.fovaros}</p>
      <img src={country.kep} alt={country.orszag} />
      <p>{country.leiras}</p>
    </div>
  );
};

const CountryDisplay = () => {
  const [page, setPage] = useState(0);
  const countriesPerPage = 1;

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleFirstPage = () => {
    setPage(0);
  };

  const handleLastPage = () => {
    setPage(countries.length - 1);
  };

  return (
    <div>
      <CountryInfo country={countries[page]} />
      <button onClick={handleFirstPage} disabled={page === 0}>First</button>
      <button onClick={handlePrevPage} disabled={page === 0}>Previous</button>
      <button onClick={handleNextPage} disabled={page === countries.length - 1}>Next</button>
      <button onClick={handleLastPage} disabled={page === countries.length - 1}>Last</button>
    </div>
  );
};

export default CountryDisplay;

