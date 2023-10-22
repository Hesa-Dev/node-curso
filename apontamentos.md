


BIBLIOGRAFIA 
https://www.youtube.com/watch?v=hHM-hr9q4mo&t=454s

para iniciar o node 

1º criar arquivo  package.json
#npm init -y

dentro do arquivo inserir a seguinte linha de código 
 "type": "module",

 para iniciar o server 
 #node server.js

 abrir o no browser http://localhost:x

 x-> número da porta que escolheste 

 Para executar diretamente no terminal 
 sem passar o nome do arquivo 
 no ficheiro package.json  no array scripts inserir um novo elemento  "dev": "node --watch  server.js"


 Para instalação da do banco de dados postgres foi necessários segtes features:.

 1º criação da base de dados na NEON.TECJH
 https://console.neon.tech/app/projects/super-union-79012023

 2º Criação do ficheiro db.js com codigo de acesso para base de dados 

 3º criação do ficheiro .env Com a váriaveis de ambiente copiado apartir da nossa [https://console.neon.tech/app/projects/super-union-79012023]  | para isso foi necessário a instalação do pacote dotenv | #npm i dotenv -D 

 Fazendo Deploy/Implatação da APP uSANDO RENDER 




/*import {createServer} from 'node:http'

const server = createServer ((request , response) =>{

    // console.log("hello node ")
    response.write("helo node estou aqui no browser  ")
    return response.end();
})

server.listen(3333)*/


