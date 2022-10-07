import React, { useEffect, useState } from "react";
import AddReview from "./AddReview";

export default function Reviews() {

    const [reviews, setReviews] = useState();

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
              .then((response) => response.json())
              .then(reviews => setReviews(reviews))
            //   .then((comments) => comments.forEach(review => renderOneReview(review)));
    }, [])

    return (
        <div className="reviews">
            {/* <div className="stars">
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star-half-alt"/>
            </div>
            <div>
            <h3>My Name is {review.name}</h3>
            <p>{review.body}</p>
            <p className="like">Like <span className="like-glyph" onClick=likeItem()>&#x2661;</span></p>
            </div>
     */}
            <AddReview />   
        </div>
    );
}
