import { Body, Header, Projects, Training, WorkExperience } from "./components";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { useKeyframeProject } from "./hooks";
import { useContactRef } from "./hooks/useContactRef";

function App() {
  const { focusprojects, textProjects, handleClick } = useKeyframeProject();
  const { contactRef, handleClickContactButton } = useContactRef();

  return (
    <div>
      <Header
        handleClick={handleClick}
        handleClickContactButton={handleClickContactButton}
      />
      <Body />
      <Training />
      <WorkExperience />
      <Projects textProjects={textProjects} focusprojects={focusprojects} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
