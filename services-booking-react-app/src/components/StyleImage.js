import React,{useState, useEffect} from "react";
import ImgCard from "./HairCard";

export default function StyleImages() {
    const [images, setImages] = useState([]);

    const styleImageAPI = "https://api.pexels.com/v1/search?query=barbershop";
    // const dyeImageAPI = "https://api.pexels.com/v1/search?query=hairdye";
    const pexelAuth = "563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b";
    
    useEffect(() => {
        fetch (styleImageAPI, {
            headers: {Authorization: pexelAuth}
        })
            .then(res => res.json())
            .then(image => setImages(image.photos))
    }
    , [])

    return(
        <div>
            <h2>Our Services</h2>
            <h3>Your Grooming Experience</h3>
            <div className="display_images" id="container">
                {images.map(image => <ImgCard key={image.id} image={image} />)}
            </div>
        </div>
    )
}