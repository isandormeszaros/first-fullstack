const { response } = require('express');
var express = require('express');
var router = express.Router();
var db = require('../db/dboperations');

//1.	GET		/filmek			- A filmek teljes listája
router.get('/', (req,res)=>{
    db.selectFilmek()
    .then(
      adat => res.json(adat)
    )
    .catch(
        error => res.send(error)
    )
})

//2.	GET		/filmek/3		- Egy film adatai
router.get('/:id',(req,res)=>{
    let id=req.params.id;
    db.selectFilmekId(id)
    .then(
      (adat)=>{
        if (adat.length ==0) res.status(404).send("Nincs ilyen rekord: "+id);
        else return res.json(adat);
      }
    )
    .catch(
      (error) => {res.send(error)}
    )
})

//3.	POST		/filmek			- Új film létrehozása
router.post('/',(req,res)=>{
  if(Object.keys(req.body).length<5) res.status(400).send("Az adatok nincsenek megadva! (megnevezes, ar, db)");
    let rendezo = req.body.rendezo;
    let cim = req.body.cim;
    let ev = req.body.ev;
    let nyelv = req.body.nyelv;
    let hossz = req.body.hossz;
    db.insertFilmek(rendezo,cim,ev,nyelv,hossz)
    .then(
        (adat)=>{
          res.status(200).json(adat);
        }
    )
    .catch(
        (error) => {res.status(500).send(error)}
    )
})

//4.	PUT		/filmek/3		- Az adott film módosítása
router.put('/:id',(req,res)=>{
  let id = req.params.id;
  let rendezo = req.body.rendezo;
  let cim = req.body.cim;
  let ev = req.body.ev;
  let nyelv = req.body.nyelv;
  let hossz = req.body.hossz;
  db.updateFilmek(rendezo,cim,ev,nyelv,hossz,id)
  .then(
    (adat)=>{
      if (adat.affectedRows ==0) res.status(404).send("Nincs ilyen rekord: "+id);
      else return res.json(adat);
    }
  )
  .catch(
      (error) => {res.send(error)}
  )
})

//5.	PATCH		/filmek/3		- Részleges módosítás
router.patch('/:id',(req,res)=>{
  let id = req.params.id;
  let rendezo = req.body.rendezo;
  let cim = req.body.cim;
  let ev = req.body.ev;
  let nyelv = req.body.nyelv;
  let hossz = req.body.hossz;
  db.patchFilmek(id,rendezo,cim,ev,nyelv,hossz)
  .then(
    (adat)=>{
      if (adat.affectedRows ==0) res.status(404).send("Nincs ilyen rekord: "+id);
      else return res.json(adat);
    }
  )
  .catch(
      (error) => {res.send(error)}
  )
})

//6.	DELETE		/filmek/3 		- Egy film törlése
router.delete('/:id',(req,res)=>{
  let id = req.params.id;
  db.deleteFilmek(id)
  .then(
    (adat)=>{
      if (adat.affectedRows ==0) res.status(404).send("Nincs ilyen rekord: "+id);
      else return res.json(adat);
    }
  )
  .catch(
      (error) => {res.send(error)}
  )
})

module.exports = router;