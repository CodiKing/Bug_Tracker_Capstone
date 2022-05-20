// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";



// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import EditableProjectPage from "./pages/ProjectPage/EditableProjectPage";

function App() {
  const [selectedProject, setSelectedProject] = useState({})

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage setSelectedProject={setSelectedProject} />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ProjectPage" element={<ProjectPage selectedProject={selectedProject} />} />
        <Route path='/editableProjectPage' element={<EditableProjectPage selectedProject={selectedProject}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
