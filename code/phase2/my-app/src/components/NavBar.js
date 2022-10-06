import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
return (
    <div>
        <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        </ul>
    </div>
);
}