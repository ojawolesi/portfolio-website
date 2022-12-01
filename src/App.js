import React from "react";
import { career, repos } from "./util/config";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import IntroSection from "./components/IntroSection/IntroSection";
import SkillSection from "./components/SkillsSection/SkillSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import CareerSection from "./components/CareerSection/CareerSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="home">
      <NavigationBar />
      <IntroSection />
      <SkillSection />
      <ProjectSection
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos}
      />
      <CareerSection career={career} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
