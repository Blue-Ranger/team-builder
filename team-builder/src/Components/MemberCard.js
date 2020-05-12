import React from "react";
import styled from "styled-components";

const BodyDiv = styled.p`
  color: green;
  font-size: 20px;
`;
const NameDiv = styled.h2`
  color: teal;
  font-size: 40px;
`;

function MemberCard(props) {
  return (
    <div>
      <NameDiv>{props.info.name}</NameDiv>
      <BodyDiv>{props.info.email}</BodyDiv>
      <BodyDiv>{props.info.role}</BodyDiv>
    </div>
  );
}

export default MemberCard;
