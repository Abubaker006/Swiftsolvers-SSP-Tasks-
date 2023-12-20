import React from "react";
import "./feature.css";
import {
  FacebookOutlined,
  Instagram,
  Twitter,
  LinkedIn,
  WhatsApp,
  Email,
  SmartphoneOutlined,
} from "@mui/icons-material";
import Button from "../Button/Button";
import featureImage from "../../images/Features.gif";

const Features = () => {
  return (
    <div className="featuresBox">
      <div className="headingBox">
        <h1 className="logo">{`{ dev.Const }`}</h1>
      </div>
      <div className="featuresBox__Main">
        <div className="box1">
          <div className="box1_linksColumn">
            <a
              className="navLink"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer">
              <FacebookOutlined />
            </a>
            <a
              className="navLink"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer">
              <Instagram />
            </a>
            <a
              className="navLink"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer">
              <Twitter />
            </a>
            <a
              className="navLink"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer">
              <WhatsApp />
            </a>
            <a
              className="navLink"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer">
              <LinkedIn />
            </a>
            <a
              className="navLink"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer">
              <Email />
            </a>
          </div>
        </div>
        <div className="box2">
          <div className="Content__box2">
            <h1 className="contentHeading">Our Future Goals</h1>
            <Button className="btn-feature" btnName="Learn More" />
          </div>
        </div>
        <div className="box3">
          <img className="featureImage" src={featureImage} alt="Company Logo" />
        </div>
      </div>
      <div className="featuresDescription">
        <SmartphoneOutlined className="smartphoneIcon" />
        <h3 className="contactNumber">+92-311224588</h3>
      </div>
    </div>
  );
};

export default Features;
