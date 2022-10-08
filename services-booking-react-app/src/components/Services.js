import React from "react";
import StyleImages from "./StyleImage";
import DyeImage from "./DyeImage";

export default function Services() {

    // const styleImageAPI = "https://api.pexels.com/v1/search?query=barbershop";
    // const dyeImageAPI = "https://api.pexels.com/v1/search?query=hairdye";
    // const pexelAuth = "563492ad6f9170000100000183d0e0c8cced43af8b10aa4391e5752b";
    
    // useEffect(() => {
    //     fetch (styleImageAPI, {
    //         headers: {Authorization: pexelAuth}
    //     })
    //         .then(res => res.json())
    //         .then(image => setImages(image.photos))
    // }
    // , [])


    // useEffect(() => {
    //     fetch (dyeImageAPI, {
    //         headers: {Authorization: pexelAuth}
    //     })
    //         .then(res => res.json())
    //         .then(dyeImage => setDyeImages(dyeImage.photos))
    // }
    // , [])

    // function renderStyleImages () {
    //     fetch (styleImageAPI, {
    //         headers: {Authorization: pexelAuth}
    //     })
    //         .then(res => res.json())
    //         .then(image => setImages(image))
    // }

    // function renderDyeImages () {
    //     fetch (dyeImageAPI, {
    //         headers: {Authorization: pexelAuth}
    //     })
    //         .then(res => res.json())
    //         .then(image => setDyeImages(image))
    // }

    return(
        <div>
            <StyleImages />
            <DyeImage />
        </div>
    )
}