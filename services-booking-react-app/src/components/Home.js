import React from "react";
import Barberseat from '../assets/images/Barberseat.jpg'
import Logo from '../assets/images/BarbershopLogo.jpg'

export default function Home() {
    return (
        <div className="about">
            <div>
            <h2>Who we are:</h2>
            <img src={Logo} alt="logo" className="about1"/>
            <br />
            <img src={Barberseat} alt="reception" className="about2"/>
            <br/>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores autem quis aliquam, sapiente ex sint voluptatum iusto pariatur, voluptate tenetur quidem eos vitae eveniet possimus fugiat maxime inventore cupiditate dolorum laboriosam earum praesentium a deleniti. Laboriosam asperiores eum odit ullam quaerat pariatur fugiat vero corporis dolores dicta ipsam excepturi molestias voluptate, eos, repellat quidem maiores sequi expedita eveniet tenetur. Autem, distinctio. Nihil quod repellat cumque minus expedita sed nulla dolores, dignissimos quasi enim ipsa incidunt voluptatum. Culpa fugit nemo doloribus blanditiis atque animi accusamus expedita. Et dignissimos est autem, commodi delectus ullam reiciendis, quisquam voluptatum officia suscipit placeat id!</p>
            </div>           
            </div>
        </div>
    )
}