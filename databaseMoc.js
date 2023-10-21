
import {randomUUID} from "node:crypto"

export class  dataBaseMoc{

    #videos = new Map()
    list(){

        return this.#videos.values()
    }

    create(video){

        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    delete(id){

        this.#videos.delete(id)
        
    }

    update(id, video){

        this.#videos.set(id,video)
    }

}