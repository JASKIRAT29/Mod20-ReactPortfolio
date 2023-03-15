import React from "react";
import "./navbar.css";
// import logo from "../assets/multilogo.png";

const Navbar = ()=>{
    return (
<>
{/* <h1>React Portfolio</h1> */}
<div>
<nav class="navbar">
  <div id="trapezoid">
    {/* <a class="sub-home" href="#">Home</a> */}
    <a href="#About" class="expandHome">About</a>
     <div class="subnav">
     <button class="subnavbtn">Portfolio<i class="fa fa-caret-down"></i></button>
       <div class="subnav-content">
    
       </div>
    </div>
  
     <div class="subnav">
     <button class="subnavbtn">Contact<i class="fa fa-caret-down"></i></button>
       </div>
    <a href="#" class="expandHome">Resume</a>
  </div>
</nav>

<section id="About">
  <h1>About</h1>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
</section>
<section id="portfolio">
   <h1>Detailed Description</h1>
   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
</section>
<section id="contact">
    <h1>Services</h1>
   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
</section>            
    </div>        
</>
    )
}
export default Navbar;