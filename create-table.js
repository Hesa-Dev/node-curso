import mySql from './db.js'

// mySql `DROP TABLE IF EXISTS videos;`.then(()=>{
//     console.log('Tabela apagada !')
// })

mySql `
CREATE TABLE videos (
    id    TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(()=>{
    console.log("tabela criado com sucesso")
})