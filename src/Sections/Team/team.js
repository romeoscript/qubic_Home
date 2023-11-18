// TeamStyles.js
import styled from 'styled-components';

export const TeamWrapper = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
  width:100%;
`;

export const TeamHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #343a40;
`;

export const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);  // 2 members in a row for tablets
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // 1 member per row on mobile
  }
`;


export const MemberImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MemberImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`;

export const MemberCard = styled.div`
  text-align: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;



export const MemberName = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #343a40;
`;

export const MemberRole = styled.p`
  color: #777;
  margin-bottom: 1rem;
`;
