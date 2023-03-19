import React from "react";
import "./navbar.css";
import jaskirat from "../assets/jaskiratpic.jpg"

const About = ()=>{
  
return (
    <>{
        <section id="About">
        <h1>About me</h1>
        
        <h2>Creative Developer</h2>
         <figure>
                  <img src={jaskirat} className="profile" />
                </figure>
        <p>Being enthusiatic developer, learn the full stack development to create new websites with the help of various tools and libraries and also contributed my efforts in projects .</p>
      </section>
}
</>)
}
export default About;