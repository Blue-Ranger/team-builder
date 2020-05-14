import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TeamMembers from "./Components/TeamMembers";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: white;
  color: white;
`;
const BodyDiv = styled.h1`
  color: red;
  font-size: 20px;
`;

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Juicy Fruit",
      email: "flavor.last.forever@yahoo.com",
      role: "Mouth Smacking Developer",
    },
  ]);

  return (
    <WrapperDiv className="App">
      <BodyDiv>
        <Form setTeam={setTeamMembers} team={teamMembers} />
        {/* props set to members */}
        <TeamMembers members={teamMembers} />
      </BodyDiv>
    </WrapperDiv>
  );
};

export default App;
