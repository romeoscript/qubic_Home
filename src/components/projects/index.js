import styled from "styled-components";
import { projectInfo } from "../../utils";
import { Link } from "react-router-dom";
import "./index.scss";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  place-items: center;
  gap: 5%;
  width: 80%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

`;

const Image = styled.img`
  width: 150px;
  margin: auto;
  @media (max-width: 500px) {
    width: 100px;
  }
`;

function ProjectCard() {
  return (
    <>
      <h2 style={{ margin: "1rem", fontSize: "2rem" }}>PROJECTS</h2>
      <Card>
        {projectInfo.map((project, index) => {
          return (
            <div key={index}>
              <Link to={project.link}>
                <Image src={project.img} />
              </Link>
            </div>
          );
        })}
      </Card>
    </>
  );
}

export default ProjectCard;
