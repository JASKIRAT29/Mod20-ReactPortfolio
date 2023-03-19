import React from "react";
import "./navbar.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = ()=>{
    return (
        <footer>
  <div id="footer_trapezoid">
  <a href="https://github.com/JASKIRAT29" target="blank">
                 
                  <FaGithub />
                                </a>     
        <div className="subfoot">
     {/* <button className="subnavbtn">Portfolio<i className="fa fa-caret-down"></i></button> */}
     <a href="https://www.linkedin.com" target="blank">
                 <FaLinkedin />
              </a>
       <div className="subnav-footer">
      
       </div>
    </div>
  
     <div className="subfoot">
     <a href="https://www.facebook.com" target="blank">
                   <FaFacebook />
              </a>
      </div>
    <a href="https://www.instagram.com" target="blank">
                  <FaInstagram />
              </a>
              {/* <br></br>
      <p>&copy;2023 Jaskirat Kaur | All Rights Reserved</p> */}

  </div>
</footer>
        // <div className="footer-div">
        //   <footer>
        //     <ul>
        //       <a href="https://github.com/kara-krzystan" target="blank">
        //         <li>
        //           <FaGithub />
        //         </li>
        //       </a>
        //       <a href="https://www.linkedin.com" target="blank">
        //         <li>
        //           <FaLinkedin />
        //         </li>
        //       </a>
        //       <a href="https://www.behance.net" target="blank">
        //         <li>
        //           <FaBehanceSquare />
        //         </li>
        //       </a>
        //       <a href="https://www.instagram.com" target="blank">
        //         <li>
        //           <FaInstagram />
        //         </li>
        //       </a>
        //     </ul>
        //   </footer>
        // </div>
      );
    };
    
    export default Footer;
