import React from "react";
import styled from "styled-components";

const NameDiv = styled.h2`
  color: teal;
  font-size: 40px;
`;

const BodyDiv = styled.p`
  color: green;
  font-size: 20px;
`;

const MemberCard = (props) => {
  return (
    <div>
      <NameDiv>{props.info.name}</NameDiv>
      <BodyDiv>{props.info.email}</BodyDiv>
      <BodyDiv>{props.info.role}</BodyDiv>
    </div>
  );
};

export default MemberCard;
