import React from "react";
import Calendly from "./Calendly";
import Pay from "./Pay";


export default function Booking() {

    return(
        <div>
        <section id="booking">
        <h2>Book Appointment</h2>
        <div className="book"><h3>Click on a Date and Pick an Available TimeSlot</h3></div>
        <Calendly/>
        {/* <button id="book">Book Appointment</button>  */}
        <br/> <br/>
        {/* <button id="book">Payment</button> */}
        <Pay /> 
        </section>
        <hr />
        </div>
    )
}