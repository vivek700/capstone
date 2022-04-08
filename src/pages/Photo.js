
import { useContext } from "react"
import { Context } from "../ContextProvider"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {

    const {Photos, toggleFavorite} = useContext(Context)
    
    const imageElement = Photos.map((img, index) => <Image key={img.id} img = {img} className ={getClass(index)} toggleFavorite = {toggleFavorite} />)


    return (
        <main className="photos">
            {imageElement}
        </main>
    )
}

export default Photos