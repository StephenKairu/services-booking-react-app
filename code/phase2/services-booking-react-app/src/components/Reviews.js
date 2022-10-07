import React, { useEffect, useState } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard"

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
            <ReviewCard />
            <AddReview />   
        </div>
    );
}
