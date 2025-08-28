import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About.jsx'
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Solutions from "./pages/Solutions.jsx";
import CybeBlog from "./pages/Cybeblog.jsx";
import BlogContent from "./pages/BlogContent.jsx";
import "./i18n";
import {LanguageProvider} from "./pages/LanguageProvider.jsx";
import CareerGrowth from "./pages/CareerGrowth.jsx";
import Contact from "./pages/Contact.jsx";
import Solution from "./pages/Solution.jsx";
import JobApplicationForm from "./pages/JobApplicationForm.jsx";

function App() {
    return (
        <LanguageProvider>
            <Navbar/>
            <main>
                <Routes>
                    {/* Optional redirect from / to /home */}
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/solution" element={<Solution />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/career" element={<CareerGrowth />} />
                    <Route path="/blogs" element={<CybeBlog />} />
                    <Route path="/blog" element={<BlogContent />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/apply/:id" element={<JobApplicationForm />} />
                </Routes>
            </main>
            <Footer/>
        </LanguageProvider>
    )
}

export default App
