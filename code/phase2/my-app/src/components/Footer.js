import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div>Footer
            <section class="footer">
        <div class="box-container">

            <div class="footer-links">
                <h3>Quick links</h3>
                <Link to="/">Home</Link>
                <a href="#"> <i class="fas fa-chevron-right"></i> Home </a>
                <a href="#about"> <i class="fas fa-chevron-right"></i> About </a>
                <a href="#services"> <i class="fas fa-chevron-right"></i> Services </a>
                <a href="#booking"> <i class="fas fa-chevron-right"></i> Booking </a>
                <a href="#reviews"> <i class="fas fa-chevron-right"></i> Review </a>
                <a href="#contactus"> <i class="fas fa-chevron-right"></i> Contact Us </a>
            </div>
    
            <div class="footer-links">
                <h3>Our services</h3>
                <a href="#services"> <i class="fas fa-chevron-right"></i> Hair Cut </a>
                <a href="#services"> <i class="fas fa-chevron-right"></i> Beard Cut </a>
                <a href="#services"> <i class="fas fa-chevron-right"></i> Hair & Beard </a>
                <a href="#services"> <i class="fas fa-chevron-right"></i> Massage </a>
                <a href="#dye"> <i class="fas fa-chevron-right"></i> Dye </a>
            </div>
    
            <div class="footer-links">
                <h3>Contact Us</h3>
                <a href="#"> <i class="fas fa-phone"></i> +2547-000-000-123 </a>
                <a href="#"> <i class="fas fa-phone"></i> +065-111-222-333 </a>
                <a href="#"> <i class="fas fa-envelope"></i> barbershop@gmail.com </a>
                <a href="#"> <i class="fas fa-map-marker-alt"></i>Westlands- Nairobi, Kenya </a>
            </div>
    
            <div class="footer-links">
                <h3>Follow us</h3>
                <a href="#"> <i class="fab fa-twitter"></i> Twitter </a>
                <a href="#"> <i class="fab fa-facebook-f"></i> Facebook </a>
                <a href="#"> <i class="fab fa-instagram"></i> Instagram </a>
                <a href="#"> <i class="fab fa-linkedin"></i> Linkedin </a>
            </div>
    
        </div>
    </section>
        </div>
    )
}