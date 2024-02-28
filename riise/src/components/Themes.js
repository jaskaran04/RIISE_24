import React from "react";
import "./Themes.css";
import image1 from "./Design for india.png";
import image2 from "./Robotics and space technology.png";
import image3 from "./Bridging Theory and Practice.png";
import image4 from "./Computational Gastronomy.png";
import image5 from "./Sustainable Mobility.png";
import image6 from "./5G-6G.png";
import image7 from "./Advanced Multicore System.png";
import image8 from "./healthcare_card.png";
import Card from "../containers/Card";
import RowOverflow from "../containers/RowOverflow";
import { Link } from "react-router-dom";

const ThemePage = () => {
  return (
    <div className="theme-container">
      <h2 className="theme-heading">THEME</h2>
      <h1 className="section-heading">BUILD FOR INDIA</h1>
      <div className="theme-card-row-container">
        <RowOverflow>
          <Link to="/healthcare">
            <Card
              title="Healthcare"
              body="Leveraging technology and tools to build accessible and affordable healthcare"
              image={image8}
              alt="India"
            />
          </Link>
          <Link to="/designforindia">
            <Card
              title={"Design for India"}
              body="Human Centered solutions for India's unique challenges"
              image={image1}
              alt="India"
            />
          </Link>
          <Link to="/roboticsandspace">
            <Card
              title={"Robotics and Space Tech"}
              body="Automating crucial tasks and unlocking space explorations"
              image={image2}
              alt="India"
            />
          </Link>
          <Link to="/bridgingthoeryandpractice">
            <Card
              title={"Bridging theory and practice"}
              body="Building and developing a strong foundation for innovation"
              image={image3}
              alt="India"
            />
          </Link>
          <Link to="/computationalgastronomy">
            <Card
              title={"Computational gastronomy"}
              body="Exploring the intersection of food, technology and culture"
              image={image4}
              alt="India"
            />
          </Link>
          <Link to="/sustainablemobility">
            <Card
              title={"Sustainable mobility"}
              body="Building Green, Accesible and Inclusive mobility"
              image={image5}
              alt="India"
            />
          </Link>
          <Link to="/5G-6G">
            <Card
              title={"5G/6G"}
              body="Powering India's Digital transformation on web connectivity"
              image={image6}
              alt="India"
            />
          </Link>
          <Link to="/advancemulticoresystems">
            <Card
              title={"Advanced multicore systems"}
              body="Building indigineous high-performance computing platforms"
              image={image7}
              alt="India"
            />
          </Link>

          <Link to="/#">
            <Card
              title={"Bharat AI"}
              body=""
              image={"/bharatai.png"}
              alt="India"
            />
          </Link>
          <Link to="/#">
            <Card title={"CiPD"} body="" image={"/cipd.png"} alt="India" />
          </Link>
          <Link to="/#">
            <Card title={"ISAC"} body="" image={"/isac.png"} alt="India" />
          </Link>
          <Link to="/#">
            <Card
              title={"Perspectives on Time, History, and Modernity"}
              body=""
              image={"/history.png"}
              alt="India"
            />
          </Link>
        </RowOverflow>
      </div>
    </div>
  );
};

export default ThemePage;
