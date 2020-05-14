import React from "react";
import MemberCard from "./MemberCard";

const TeamMembers = (props) => {
  return (
    <div>
      <h1>Team Members</h1>
      {/* map members */}
      {props.members.map((data) => (
        <MemberCard info={data} />
      ))}
    </div>
  );
};

export default TeamMembers;
