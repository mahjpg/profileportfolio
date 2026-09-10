import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/home";
import About from "./component/about/About";
import Project from "./component/project/project";
import Skills from "./component/skills/skills";
import Experience from "./component/experience/experience";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Home />
        <About />
        <Project />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;