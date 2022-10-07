import React from "react";
import ImgCard from "./HairCard";

export default function ReviewCard() {

    return(
        <div>
      <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
      </div>
      <h3>My Name is ${review.name}</h3>
      <p>${review.body}</p>
      <p class="like">Like <span class="like-glyph" onClick={likeItem()}>&#x2661;</span></p>
    
        </div>
    )
}