import React,{useState} from "react";

export default function AddReview ({handleNewReview}) {
    const [formData,setFormData]=useState({
        name:"",
        email: "",
        body:"",
      })
    
      const handleSaveReview = async (e) => {
            e.preventDefault();
            console.log(formData);
                const res = await fetch("http://localhost:8001/transactions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        body: formData.body,
                    }),
                });
                const response = await res.json();
                handleNewReview(response);
                setFormData({
                  name:"",
                  email: "",
                  body:"",
                });
        };
    
      function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
      }

    return (
        <div className="reviews">
            <h2>Our Customers Say...</h2>
            <div id="reviews-container">
                <div className="review-card">
                </div>
                <div className="form">
                    <h3>Satisfied with our service?</h3>
                    <form onSubmit={handleSaveReview} onChange={handleChange} className="comment-form">
                    Name: <br/><input value={formData.name} type="text" name="name" placeholder="Your name?" className="client-name" required /> <br/> <br/>
                    Email: <br/><input value={formData.email} type="email" name="email" placeholder="Your email won't be published" className="email-input" required /> <br/><br/>
                    Comment: <br/>
                    <textarea value={formData.body} name="body" className="client-text" cols="30" rows="6" placeholder="Leave a review..." required></textarea><br/><br/>
                    <button type="submit" className="submit-button">Submit Review</button>
                    </form>
                </div>
            </div>    
        </div>
    );
}
