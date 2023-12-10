import styles from "./App.module.css";
import { Experence } from "./Experence/Experence";
import { About } from "./components/About";
import { CoverSection } from "./components/CoverSection";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/contact/contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <CoverSection />
      <About />
      <Experence />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
