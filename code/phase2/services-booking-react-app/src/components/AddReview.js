import React from "react";

export default function AddReview () {
    return (
        <div className="reviews">
            <h2>Our Customers Say...</h2>
            <div id="reviews-container">
                <div className="review-card">
                </div>
                <div className="form">
                    <h3>Satisfied with our service?</h3>
                    <form id="comment-form" className="comment-form">
                    Name: <br/><input type="text" name="name" placeholder="Your name?" id="client-name" required /> <br/> <br/>
                    Email: <br/><input type="email" name="email" placeholder="Your email won't be published" className="email-input" required /> <br/><br/>
                    Comment: <br/>
                    <textarea name="body" id="client-text" cols="30" rows="6" placeholder="Leave a review..." required></textarea><br/><br/>
                    <button type="submit" id="submit-button">Submit Review</button>
                    </form>
                </div>
            </div>    
        </div>
    );
}