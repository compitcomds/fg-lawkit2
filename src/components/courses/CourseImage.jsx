import { useEffect, useState } from "react"
import config from "../../lib/config"
import axios from "axios"

export default function CourseImage({imageId, title, className}){
    const [image, setImage] = useState(null)

    useEffect(()=>{
        const fetchImage = async() =>{
            if(!imageId) return
            const {data} = await axios.get(`${config.backendApiUrl}/api/upload/files/${imageId}`)
            setImage({url: data.url, alt: data.alternativeText || `Image | ${title}`})
        }

        fetchImage()
    }, [imageId])

    if(!image || !image?.url) return <></>

    return <><img src={image.url} alt={image.alt || "Image"} className={className || ""} /> </>
}