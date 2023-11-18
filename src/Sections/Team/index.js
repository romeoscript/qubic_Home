// TeamSection.js
import React from "react";
import {
  TeamWrapper,
  TeamHeader,
  MembersGrid,
  MemberCard,
  MemberImage,
  MemberImageContainer,
  MemberName,
  MemberRole,
} from "./team";
import ohmar from "../../assets/ohmarimg.jpeg";
import Romeo from "../../assets/romeo.jpeg";
import Peter from "../../assets/pete.jpeg";
import Kene from "../../assets/kene.jpeg";
import chris from "../../assets/Chris.jpg";

const teamMembers = [
  {
    name: "Rejoice Orjiene ",
    role: "CEO",
    image: ohmar,
  },
  {
    name: "Romeo Chukwuemeka",
    role: "Frontend and Mobile Engineer",
    image: Romeo,
  },
  {
    name: "Peter Ani ",
    role: "Backend Devops Engineer / Cyber Security Analyst",
    image: Peter,
  },
  {
    name: "Wisdom Kenechukwu ",
    role: "Backend Devops Engineer/ Data Analyst ",
    image: Kene,
  },
  {
    name: "Christian Adelani ",
    role: "Product Designer",
    image: chris,
  },
];

const Team = () => {
  return (
    <TeamWrapper>
      <TeamHeader>Our Team</TeamHeader>
      <MembersGrid>
        {teamMembers.map((member) => (
          <MemberCard key={member.name}>
            <MemberImageContainer>
              <MemberImage src={member.image} alt={member.name} />
            </MemberImageContainer>
            <div>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </div>
          </MemberCard>
        ))}
      </MembersGrid>
    </TeamWrapper>
  );
};

export default Team;
