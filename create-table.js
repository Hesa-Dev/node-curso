import mySql from './db.js'


mySql `
CREATE TABLE videos (
    id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER
);
`.then(()=>{
    console.log("tabela criado com sucesso")
})