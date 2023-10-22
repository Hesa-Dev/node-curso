


// Framework fastify

// MÉTODO HTTP | 
//GET(RECEBER INFO) , PUT(EDITAR | ALTERAR INFO) ,
 //DELETE(APAGAR INFO) , POST(ADICINAR INFO ) PATCH(ALTERAR UMA INFO ESPECIFICA )

import {fastify} from 'fastify'

// import { dataBaseMoc } from './databaseMoc.js'
import {dbPostgres} from './dbPostgres.js'

const server = fastify()

const dataBase = new dbPostgres();


server.post('/videos', async (request , response)=>{

    const {title , description , duration } = request.body

   await  dataBase.create({

        title:title,
        description: description,
        duration: duration
    })

    console.log(dataBase.list())
    return response.status(201).send()
})

server.get('/videos', async(request)=>{

    // const search = request.query.search
    const video =  await dataBase.list(request.query.search)
    // console.log(dataBase.list())
    return video;
})

server.put('/videos/:id', async (request, response)=>{

    const videoId = request.params.id
    const {title , description , duration } = request.body

   await dataBase.update(videoId,{
        title,
        description,
        duration
    })

    // status 204 -> resposta com sucesso mais sem contéudo de resposta 
    return response.status(204).send();

})

server.delete('/videos/:id' , async(request , response) =>{

   await  dataBase.delete(request.params.id)
    return response.status(204).send();
})

//  Rodar servidor localmente
// server.listen({
//     port:3333,
// })

// Fazendo deploy da aplicação | rodar app remotamente 

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})



