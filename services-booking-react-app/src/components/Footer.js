import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="footer">
        <div class="box-container">

            <div className="footer-links">
                <h3>Quick links</h3>
                <Link to="/"><i className="fas fa-chevron-right" />Home</Link>
                <Link to="/services"> <i className="fas fa-chevron-right"></i> Services </Link>
                <Link to="/booking"> <i className="fas fa-chevron-right"></i> Booking </Link>
                <Link to="/reviews"> <i className="fas fa-chevron-right"></i> Review </Link>
                <Link to="/contact-us"> <i classname="fas fa-chevron-right"></i> Contact Us </Link>
            </div>
    
            <div className="footer-links">
                <h3>Our services</h3>
                <Link to="/services"> <i className="fas fa-chevron-right"></i> Hair Cut </Link>
                <Link to="/services"> <i className="fas fa-chevron-right"></i> Beard Cut </Link>
                <Link to="/services"> <i className="fas fa-chevron-right"></i> Hair & Beard</Link>
                <Link to="/services"> <i className="fas fa-chevron-right"></i> Massage </Link>
                <Link to="/services"> <i className="fas fa-chevron-right"></i> Dye </Link>
            </div>
    
            <div className="footer-links">
                <h3>Contact Us</h3>
                <Link to="/contactus"> <i className="fas fa-phone"></i> +2547-000-000-123 </Link>
                <Link to="/contactus"> <i className="fas fa-phone"></i> +065-111-222-333 </Link>
                <Link to="/contactus"> <i className="fas fa-envelope"></i> barbershop@gmail.com</Link>
                <Link to="/contactus"> <i className="fas fa-map-marker-alt"></i>Westlands- Nairobi, Kenya </Link>
            </div>
    
            <div className="footer-links">
                <h3>Follow us</h3>
                <Link to="/contactus"> <i className="fab fa-twitter"></i> Twitter </Link>
                <Link to="/contactus"> <i className="fab fa-facebook-f"></i> Facebook </Link>
                <Link to="/contactus"> <i className="fab fa-instagram"></i> Instagram </Link>
                <Link to="/contactus"> <i className="fab fa-linkedin"></i> Linkedin </Link>
            </div>
    
        </div>
        </div>
    )
}