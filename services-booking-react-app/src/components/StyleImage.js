import React from "react";
import ImgCard from "./HairCard";

export default function StyleImages({images, handleLike}) {

    return(
        <div>
            <h2>Our Services</h2>
            <h3>Your Grooming Experience</h3>
            <div className="display_images" id="container">
                {images.map(image => <ImgCard key={image.id} image={image} handleLike={handleLike}/>)}
            </div>
        </div>
    )
}