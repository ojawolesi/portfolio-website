import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import IntroSection from "./components/IntroSection/IntroSection";
import SkillSection from "./components/SkillsSection/SkillSection";

function App() {
  return (
      <div>
        <NavigationBar />
        <IntroSection />
          <SkillSection />
      </div>);
}

export default App;
