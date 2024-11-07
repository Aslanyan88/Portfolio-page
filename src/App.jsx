import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import GithubProjects from './pages/GithubProjects';
import LinkedInPosts from './pages/LinkedInPosts';
import Reviews from './pages/Reviews';
import About from './pages/About'; // Ensure correct import

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/github" element={<GithubProjects />} />
            <Route path="/linkedin" element={<LinkedInPosts />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
