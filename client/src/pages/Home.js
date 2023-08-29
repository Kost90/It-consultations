import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BasicCarousel from "../components/BasicCarousel";
import ServicesTabs from "../components/servicesTabs/ServicesTabs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeBody">
        <h1>Welcome to Triple Consult</h1>
        <h3>
          Usabiltiy thinking outside the box. Through the lens of i also believe
          it's important for every member to be involved and invested in our
          company and this is one way to do so, yet cloud native container based
          per my previous email, yet idea shower. Peel the onion today shall be
          a cloudy day,{" "}
        </h3>
      </div>
      <div className="homeContainer">
        <h1>OUR SERVICES:</h1>
        <ServicesTabs/>
      </div>
      <BasicCarousel />
    </div>
  );
};

export default Home;
