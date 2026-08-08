import ImageUploader from "./ImageUploader";
import "./App.css";
import Navbar from "./Navbar";
import Photos from "./Photos.jsx";
import Home from "./Home.jsx";
import {useState} from "react";

function App() {
    const [currentView, setCurrentView] = useState("home");
    return (
        <div className="App">
            <Navbar onNavigate={setCurrentView}/>
            {currentView === "home" && <Home onNavigate={setCurrentView} />}
            {currentView === "upload" && <ImageUploader/>}
            {currentView === "photos" && <Photos/>}
        </div>
    );
}

export default App;