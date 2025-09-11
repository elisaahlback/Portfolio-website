import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from './routes/MainPage';
import Projects from './routes/Projects';
import ContactPage from './components/ContactPage';
import ProjectInfo from './components/ProjectInfo';


function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Projects/:projectid" element={<ProjectInfo />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;