import React from "react";


 const ImgCard = ({image, handleLike}) => {

    return (
        <div className="image-div" key={image.id}>
              <img src={image.src.large} />
              <p className="like">Like <span className="like-glyph" onClick={() => handleLike()}>&#x2661;</span></p>
         </div>
         )
}


export default ImgCard;