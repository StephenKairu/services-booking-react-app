import React from "react";

export default function ReviewCard({ review:{name, body }, likeItem}) {

    return(
        <div>
      <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
      </div>
      <h3>My Name is {name}</h3>
      <p>{body}</p>
      <p class="like">Like <span class="like-glyph" onClick={likeItem()}>&#x2661;</span></p>
    
        </div>
    )
}