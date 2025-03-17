import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Domains from "./pages/Domains";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ flex: "1", padding: "20px", marginBottom: "50px" }}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </div>
        <Footer style={{ marginTop: "auto" }} />
      </div>
    </Router>
  );
}

export default App;
