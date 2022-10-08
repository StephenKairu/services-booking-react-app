import React,{useState,useEffect} from "react";
import ImgCard from "./HairCard";

export default function DyeImage() {

    const [dyeImages, setDyeImages] = useState([]);
    const dyeImageAPI = "https://api.pexels.com/v1/search?query=hairdye";
    const pexelAuth = "563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b";
    

    useEffect(() => {
        fetch (dyeImageAPI, {
            headers: {Authorization: pexelAuth}
        })
            .then(res => res.json())
            .then(image => setDyeImages(image.photos))
    }
    , [])

    return (
        <div>
            <div>
            <h3 id="dye">Hair Dye Services</h3>
            </div>
            <div id="hair-dye" className="display_images">
                {dyeImages.map(image => <ImgCard key={image.id} image={image} />)}
            </div>
        </div>
    )
}