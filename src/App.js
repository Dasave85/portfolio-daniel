import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { Training } from "./components/Training";
import { WorkExperience } from "./components/WorkExperience";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Training />
      <WorkExperience />
    </div>
  );
}

export default App;
