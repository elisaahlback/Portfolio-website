import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './routes/MainPage';
import ProjectsPage from './routes/ProjectsPage';
import ContactPage from './routes/ContactPage';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <div className="content">
                <Routes>
                    <Route exact path="/" element={ <MainPage /> } />
                    <Route path="/ProjectsPage" element={ <ProjectsPage /> } />
                    <Route path="/ContactPage" element={ <ContactPage /> } />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;