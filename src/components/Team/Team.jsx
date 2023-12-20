import React from "react";
import "./team.css";
import {
  FacebookOutlined,
  Instagram,
  Twitter,
  LinkedIn,
  WhatsApp,
  Email,
} from "@mui/icons-material";
import teamArray from "../../TeamsArray/File";
const Returner = ({
  imageName,
  memberName,
  memberRank,
  memberDescription,
  memberDept,
}) => {
  return (
    <div className="box__teamComponent">
      <div className="imageBox">
        <img className="image__imageBox" src={imageName} alt="User Pic" />
      </div>
      <div className="memberInformation">
        <h2 className="memberName">{memberName}</h2>
        <h3 className="memberRank">{memberRank}</h3>
        <h3 className="memberRank">Team: {memberDept}</h3>
        <p className="memberDescription">{memberDescription}</p>
      </div>
      <div className="socialLink_Box">
        <a
          className="socialLink"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <FacebookOutlined />
        </a>
        <a
          className="socialLink"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <Instagram />
        </a>
        <a
          className="socialLink"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <Twitter />
        </a>
        <a
          className="socialLink"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <WhatsApp />
        </a>
        <a
          className="socialLink"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <LinkedIn />
        </a>
        <a
          className="socialLink"
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <Email />
        </a>
      </div>
    </div>
  );
};
const Team = () => {
  return teamArray.map((memberData, id) => {
    return (
      <>
        <Returner
          key={id}
          imageName={memberData.pic}
          memberName={memberData.name}
          memberRank={memberData.rank}
          memberDept={memberData.department}
          memberDescription={memberData.intro} // I have to add links also as props
        />
      </>
    );
  });
};

export default Team;
