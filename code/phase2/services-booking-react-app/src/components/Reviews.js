import React, { useEffect, useState } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard"

export default function Reviews({handleNewReview}) {

    const [reviews, setReviews] = useState();

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
              .then((response) => response.json())
              .then(reviews => setReviews(reviews))
            //   .then((comments) => comments.forEach(review => renderOneReview(review)));
    }, [])

    return (
        <div className="reviews">
            {reviews.map((review, id) => (
					<ReviewCard key={review.id} review={review} />))}
            <AddReview handleNewReview={handleNewReview} reviews={reviews}/>   
        </div>
    );
}
