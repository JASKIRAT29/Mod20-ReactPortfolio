import React from "react";
import pdf from "../assets/jaskirat_resume.pdf"
  
const Resume = () => {
  
    // Function will execute on click of button
    // const onButtonClick = () => {
    //     // using Java Script method to get PDF file
    //     // fetch('SamplePDF.pdf').then(response => {
    //     //     response.blob().then(blob => {
    //     //         // Creating new object of PDF file
    //     //         const fileURL = window.URL.createObjectURL(blob);
    //     //         // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = 'pdf';
    //             alink.click();
            // })
        // })
    // }
    return (
        <>
            <center>
                <h2>Confined Details of Resume</h2>
                <h3>Click on below button to download PDF file</h3>
                {/* <button type="submit" className="download_pdf"  > */}
                <a href={pdf} target="_blank" rel="noreferrer">
                <button type="submit" className="download_pdf"  >
                  Download Pdf
                                  </button>

                </a>

                {/* </button> */}
            </center>
            <section>
            <div class="row">
  <div class="column_resume">
    <div class="card_resume" >
    <h3>NAME: Jaskirat Kaur</h3>
    <h3>TITLE: Web Developer</h3>
    <h3>CONTACT DETAILS:</h3>
      <h3>email: jaskiratkr29@gmail.com</h3>
      <h3>phone: (555) 555-5555 </h3>
      <h3>address: '123 Main St, Canada'</h3>
      <h3>website: jaskirat.com</h3>
    </div>
  </div>
  <div class="column_resume">
    <div class="card_resume" >
      <h2>Work Experience</h2>
    <h3>  company: 'ABC Company',
        title: 'Web Developer',
        location: 'Anytown, USA',
        dates: 'May 2010 - Present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</h3>
        <h3> company: 'XYZ Company',
        title: 'Front-end Developer',
        location: 'Anytown, USA',
        dates: 'January 2009 - May 2010',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</h3>
    </div>
  </div>
  <div class="column_resume">
    <div class="card_resume" >
      <h2>Educational Qualifications</h2>
    <h3>  School: 'ASBAS Memorial College',
        Degree: 'Master of Computer Science',
        Graduation: 'May 2013',
        Location: 'Punjab, India'</h3>
        <h3> School: 'Punjabi University ',
        Degree: 'Bachelor of Science in Computer Science',
        Graduation: 'May 2011',
        Location: 'Punjab, India'</h3>
    </div>
  </div>
  <div class="column_resume">
    <div class="card_resume" >
      <h2>Skills</h2>
    <h3 className="skills">HTML :  HTML is the standard markup language for Web pages.

</h3>
        <h3 className="skills"> CSS :CSS stands for Cascading Style Sheets.CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files</h3>
        <h3 className="skills">JavaScript : JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document.</h3>
        <h3 className="skills">React : React is a JavaScript library for building user interfaces.

React is used to build single-page applications.

React allows us to create reusable UI components.</h3>
        <h3 className="skills">NodeJs: Node.js is an open source server environment.

Node.js allows you to run JavaScript on the server.</h3>
    </div>
  </div>


  
  </div>
              
            </section>
        </>
    );
};
  
export default Resume;

