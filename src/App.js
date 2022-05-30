import './App.css';
import FadeIn from 'react-fade-in/lib/FadeIn';

function App() {
  return (
    <div className="App">
      <FadeIn>
        <h1 className="title">Hey, I'm Aneesh Maganti 👋</h1>
        <h3 className="description">I'm currently studying CS at NYU. Check out my resume and projects here. </h3>
        
        <h2 className="resume"> <a href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/aminoa/resume/main/resume.pdf?token=GHSAT0AAAAAABU74U3C77XTABS326JRSE2EYUVBJVA">Resume</a></h2>

        <h2 className="project_title">Interesting Projects</h2>
        <ul className="project_list">
          <li><a href="https://github.com/aminoa/ac8">ac8: Chip-8 Emulator</a></li>
          <li><a href="https://bluebird747.itch.io/dac"> DAC: Direct Air Capture Plant Exploration Game </a></li>
          <li><a href="https://github.com/aminoa/appl"> appl: API for NYU Engage</a></li>
          <li><a href="https://github.com/bkRoad/bkRoad"> bkRoad: Book Management Website</a></li>
          <li><a href="https://github.com/aminoa/auto-daily-screener"> Auto Daily Screener - filling out NYU daily screeners </a></li>
        </ul> 

      </FadeIn>
    </div>
  );
}

export default App;
