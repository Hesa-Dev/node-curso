
/*import {createServer} from 'node:http'

const server = createServer ((request , response) =>{

    // console.log("hello node ")
    response.write("helo node estou aqui no browser  ")
    return response.end();
})

server.listen(3333)*/

// Framework fastify

// MÉTODO HTTP | GET(RECEBER INFO) , PUT(EDITAR | ALTERAR INFO) , DELETE(APAGAR INFO) , POST(ADICINAR INFO ) PATCH(ALTERAR UMA INFO ESPECIFICA )

import {fastify} from 'fastify'

import { dataBaseMoc } from './databaseMoc.js'

const server = fastify()
const dataBase = new dataBaseMoc();


server.post('/videos', (request , response)=>{

    const {title , description , duration } = request.body

    dataBase.create({

        title:title,
        description: description,
        duratio: duration
    })
    console.log(dataBase.list())
    return response.status(201).send()
})

server.get('/videos', ()=>{

    const video =   dataBase.list()

    // console.log(dataBase.list())

    return video;
})

server.put('/videos/:id', (request, response)=>{

    const videoId = request.params.id
    const {title , description , duration } = request.body

    dataBase.update(videoId,{
        title,
        description,
        duration
    })

    // status 204 -> resposta com sucesso mais sem contéudo de resposta 
    return response.status(204).send();

})

server.listen({
    port:3333,
})



