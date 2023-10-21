
import { randomUUID } from "node:crypto"

export class dataBaseMoc {

    #videos = new Map()
    // Listar todos videos 
    list() {

        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data
            }
        })
        .filter(video =>{

            if(search){
                return video.title.includes(search)
            }
            return true
        })
    }

    // Adicionar novo video 
    create(video) {

        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    // deletar video 
    delete(id) {

        this.#videos.delete(id)

    }

    //  atualizar video 
    update(id, video) {

        this.#videos.set(id, video)
    }

}