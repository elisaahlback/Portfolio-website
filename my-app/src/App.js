import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './routes/MainPage';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <div className="content">
                <Routes>
                    <Route exact path="/" element={ <MainPage /> } />
                    <Route path="/Projects" element={ <Projects /> } />
                    <Route path="/Contact" element={ <Contact /> } />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;