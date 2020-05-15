import React, { useState } from "react";

import Form from "./Components/Form";
import Members from "./Components/Members";
import "./App.css";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Juicy Fruit",
      email: "flavor.last.forever@yahoo.com",
      role: "Mouth Smacking Developer",
    },
  ]);

  const handleSubmit = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="App">
      <h1>Member Submission</h1>
      <Form onSubmit={handleSubmit} />
      <Members teamMembers={teamMembers} />
    </div>
  );
};

export default App;
