import React from "react";

export default function ReviewCard({ review:{name, body }}) {

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
      <p className="like">Like <span className="like-glyph" >&#x2661;</span></p>
      {/* onClick={likeItem()} */}
        </div>
    )
}