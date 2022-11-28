import React from "react";
import { career, repos } from "./util/config";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import IntroSection from "./components/IntroSection/IntroSection";
import SkillSection from "./components/SkillsSection/SkillSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import CareerSection from "./components/CareerSection/CareerSection";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
