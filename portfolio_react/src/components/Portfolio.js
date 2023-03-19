import React from "react";
import "./navbar.css";
import notetaker from "../assets/notetaker.png";
import webapi from "../assets/webapi.png";
import travel_blog from "../assets/travel_blog.png"
import weather_web from "../assets/project1.png"

const Portfolio = ()=>{
    return (
   <>     
             <section id="portfolio">
   <h2>Projects</h2>
   {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> */}
   <div class="row">
  <div class="column">
    <div class="card">
        <a href="https://github.com/JASKIRAT29/Note-Taker"><img src={notetaker} title="notetaker"></img></a>
      <h3>Note Taker Application </h3>
      {/* <p>Some text</p>
      <p>Some text</p> */}
    </div>
  </div>

  <div class="column">
    <div class="card">
    <a href="https://github.com/JASKIRAT29/Web-API-Code-Quiz"><img src={webapi} title="quiz"></img></a>

      <h3>Quiz Challenge</h3>
      
    </div>
  </div>
  </div>
  <div class="row">
  <div class="column" >
    <div class="card">
    <a href="https://github.com/JASKIRAT29/Travel-Blog"><img src={travel_blog} title="Travel Blog"></img></a>

      <h3>Travel Blog</h3>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <a href="https://github.com/JASKIRAT29/JASKIRAT-PORTFOLIO.git"><img src={weather_web} title="Jaskirat Portfolio"></img></a>

      <h3>Weather Web</h3>
     
    </div>
  </div>
</div>
</section>

</>
    
    )
    }
    export default Portfolio;
