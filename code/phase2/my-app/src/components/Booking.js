import React from "react";
import Pay from "./Pay";


export default function Booking() {

    return(
        <div>
        <section id="booking">
        <h2>Book Appointment</h2>
        <div className="form"><h3>Click on a Date and Pick an Available TimeSlot</h3></div>
        <button id="book">Book Appointment</button> <br/> <br/>
        {/* <button id="book">Payment</button> */}
        <Pay /> 
        </section>
        <hr />
        </div>
    )
}