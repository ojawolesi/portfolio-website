import React from "react";
import { career, repos } from "./util/config";
import { useMediaQuery } from "react-responsive";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import IntroSection from "./components/IntroSection/IntroSection";
import SkillSection from "./components/SkillsSection/SkillSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import CareerSection from "./components/CareerSection/CareerSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div id="home">
      <NavigationBar isSmallScreen={isSmallScreen} />
      <IntroSection isSmallScreen={isSmallScreen} />
      <SkillSection isSmallScreen={isSmallScreen} />
      <ProjectSection
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos}
        isSmallScreen={isSmallScreen}
      />
      <CareerSection career={career} isSmallScreen={isSmallScreen} />
      <ContactSection isSmallScreen={isSmallScreen} />
      <Footer isSmallScreen={isSmallScreen} />
    </div>
  );
}

export default App;
