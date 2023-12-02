var config=require('./dbconfig');
const mysql=require('mysql');

let pool = mysql.createPool(config);

//1.	GET		/filmek			- A filmek teljes listája
async function selectFilmek(){
    return new Promise((resolve, reject) => {
        pool.query('select * from film', (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

//2.	GET		/filmek/3		- Egy film adatai
async function selectFilmekId(id){
    return new Promise((resolve, reject) => {
        pool.query('select * from film where id=?',[id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

//3.	POST		/filmek			- Új film létrehozása
async function insertFilmek(rendezo,cim,ev,nyelv,hossz){
    return new Promise((resolve, reject) => {
        pool.query('insert into film (rendezo,cim,ev,nyelv,hossz) values (?,?,?,?,?)',[rendezo,cim,ev,nyelv,hossz], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

//4.	PUT		/filmek/3		- Az adott film módosítása
async function updateFilmek(rendezo,cim,ev,nyelv,hossz,id){
    return new Promise((resolve, reject) => {
        pool.query('update film set rendezo=?,cim=?,ev=?,nyelv=?,hossz=? where id=?',[rendezo,cim,ev,nyelv,hossz,id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

//5.	PATCH		/filmek/3		- Részleges módosítás
async function patchFilmek(id,rendezo,cim,ev,nyelv,hossz){
    return new Promise((resolve, reject) => {
        let ell=0;
        let sql='update film set';
        let arr=[];
        if(rendezo){
            ell=0;
            sql+=' rendezo=?' ;
            arr.push(rendezo);
            ell=1;
        }    
        if(cim){
            if (ell==1) sql+=(',');
            ell=0;
            sql+=' cim=?' ;
            arr.push(cim);
            ell=1;
        }
                
        if(ev){
            if (ell==1) sql+=(',');
            ell=0;
            sql+=' ev=?' ;
            arr.push(ev);
            ell=1;
        }
        
        if(nyelv){
            if (ell==1) sql+=(',');
            ell=0;
            sql+=' nyelv=?' ;
            arr.push(nyelv);
            ell=1;
        }
               
        if(hossz){
            if (ell==1) sql+=(','); 
            ell=0;
            sql+=' hossz=?' ;
            arr.push(hossz);
        }
        sql+=' where id=?';
        arr.push(id);
        pool.query(sql,arr, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

//6.	DELETE		/filmek/3 		- Egy film törlése
async function deleteFilmek(id){
    return new Promise((resolve, reject) => {
        pool.query('delete from film where id=?', id , (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

module.exports={
    selectFilmek :  selectFilmek,
    selectFilmekId : selectFilmekId,
    insertFilmek : insertFilmek,
    updateFilmek : updateFilmek,
    patchFilmek : patchFilmek,
    deleteFilmek : deleteFilmek
}