import React from 'react';
import { Link } from "react-router-dom";
// import Portrait from "../../assets/images/profile_pic.jpg";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h1>Hi, I'm Jaskirat kaur..</h1>
        <p>Welcome to my Portfolio!!</p>
        <Link to="portfolio">
          <button type="submit" className='submit'>Projects</button>
        </Link>
      </div>
      {/* <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div> */}
    </section>
  );
}

export default Home;