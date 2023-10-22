
import { randomUUID } from "node:crypto"
import mySql from './db.js'

// import {DataBasePostgres} from './dbPostgres'

// import {DataBas}--> importação de uma classe  from './dbPostgres.js'
// import mySql from './db.js'--> importação de uma variavel 

// const dbPs = new DataBasePostgres();


export class dbPostgres {

    // Listar todos videos  
    async  list  (search)   {

        let video

        if (search) {
            video = await  mySql `select * from videos where title ilike ${'%'+search+'%'}`
        } else {
            video = await  mySql`select * from videos`
        }

        return   video
    }

    // Adicionar novo video 
    async create(video) {

        const videoId = randomUUID()
        const {title, description , duration } = video 

        await mySql `insert into videos (id, title, description,duration ) 
              VALUES (${videoId},${title},${description},${duration})`
    }

    //Deletar video 
    async delete(id) {

        await mySql `delete from   videos  WHERE id=${id}`   
    }

    //  atualizar video 
   async update(id, video) {

        const {title, description , duration } = video 
        await mySql `update videos set  title = ${title}, description = ${description}, 
              duration = ${duration} WHERE id=${id}`
    }

}