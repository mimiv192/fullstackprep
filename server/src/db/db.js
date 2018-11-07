import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'chirpr',
    password: 'innovatebham2017',
    database: 'chirpr'

});

const getChirps = () => {
    let query = `SELECT * FROM chirps c JOIN users u ON u.id = c.userid ORDER BY c.id DESC;`;
    return new Promise ((resolve,reject) => {
        pool.query (query, (err,results, fields) => {
    if (err) reject(err);
    
    resolve(results);   
        });
    });
};


const getChirp = (id) => {
    let query = `SELECT * FROM chirps c JOIN users u ON u.id = c.userid WHERE c.id = ${id};`;
    return new Promise ((resolve,reject) => {
        pool.query (query, (err,results, fields) => {
    if (err) reject(err);
    
    resolve(results);   

        });
    });
};


const addChirp = (chirp) => {
let query =`INSERT INTO chirps(userid, text) VALUE(?);`;
let data = Object.values(chirp);

return new Promise ((resolve,reject) => {
    pool.query(query,[data], (err,results,fields)=> {
        if(err) reject (err);

        resolve(results);


    });    

});

};


const editChirp = (id, text) => {


    let query = 'UPDATE chirps SET text = "${text}" WHERE id = ${id}';

    return new Promise ((resolve,reject) => {
        pool.query(query, (err,results, fields) => {
            if(err) reject(err);
            resolve(results);
        });
    });

};
 

export { getChirps, getChirp, addChirp, editChirp, deleteChirp };