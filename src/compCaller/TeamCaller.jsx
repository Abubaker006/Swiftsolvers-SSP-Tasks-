import React from "react";
import "./teamCaller.css";
import Team from "../components/Team/Team";

const TeamCaller = () => {
  return (
    <>
      <div className="teamComponent">
        <div className="heading_boxTeam">
          <h1 className="heading_team">Our Team</h1>
        </div>
        <Team />
      </div>
    </>
  );
};

export default TeamCaller;
