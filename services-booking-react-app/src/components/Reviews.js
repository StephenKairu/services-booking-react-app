import React, { useEffect, useState } from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewCard from "./ReviewCard"

export default function Reviews() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
            fetch('https://my-json-server.typicode.com/StephenKairu/dummydbserver/Reviews')
              .then((response) => response.json())
              .then(reviews => setReviews(reviews))
            //   .then((comments) => comments.forEach(review => renderOneReview(review)));
    }, [])


// 	React.useEffect(() => {fetchTransactions();
//   }, []);

// 	const fetchTransactions = async () => {
// 			const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
// 			const response = await res.json();
// 			setReviews(response);
		
// 	};
	const handleNewReview = (review) => {
		setReviews([...reviews, review]);
	};


    return (
        <div className="reviews">
            <h2>Our Customers Say...</h2>
            {reviews.map((review) => (
					<ReviewCard key={review.id} review={review} />))}
            <AddReviewForm handleNewReview={handleNewReview} reviews={reviews}/>   
        </div>
    );
}
