
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



server.get('/videos', (request , response)=>{

    dataBase.create({

        title: "Video01",
        description: "video 01 first",
        duratio: 180
    })
    console.log(dataBase.list())
    return response.status(201).send()
})

server.get('/hesasoft', ()=>{
    return 'hello world hesasoft'
})

server.get('/node', ()=>{
    return 'hello world node'
})

server.listen({
    port:3333,
})



