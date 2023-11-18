//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import ProjectCard from "../components/projects";
import Card from "../Sections/Card/Card";
import Team from "../Sections/Team";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <ProjectCard />
      <Services />
      <Card />
      <Team />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
