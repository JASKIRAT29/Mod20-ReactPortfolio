import React from "react";
import "./navbar.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";// import logo from "../assets/multilogo.png";

 function Navbar() {//   <About id="About"></About>
// {/* <section id="portfolio">
//    <h1>Projects</h1>
//    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
// </section> */}
// <Portfolio id="portfolio"></Portfolio>
{/* <section id="Contact">
    <h1>Contact</h1>
   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
</section>  */}
    return (

<Router>
<div>
<nav className="navbar" >
  <div id="trapezoid">
    <Link to="/about" className="expandHome">About</Link>
     <div className="subnav">
     {/* <button className="subnavbtn">Portfolio<i className="fa fa-caret-down"></i></button> */}
     <Link to="/portfolio" className="expandHome">Portfolio</Link>

       <div className="subnav-content">
      
       </div>
    </div>
  
     <div className="subnav">
     {/* <button className="subnavbtn">Contact<i className="fa fa-caret-down"></i></button> */}
     <Link to="/contact" className="expandHome">Contact</Link>

      </div>
    {/* <a href="https://codepen.io/pec-man" className="expandHome">Resume</a> */}
    <Link to="/resume" className="expandHome">Resume</Link>

  </div>
</nav>

           
    </div>
    {/* <Switch> */}
    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />

          {/* <Route path="/about">
            <About /> */}
          {/* </Route> */}
          {/* <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          </Routes>
        {/* </Switch> */}
    </Router>



    )

    
}
export default Navbar;