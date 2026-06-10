
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
     <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
      <Hero />
      <About />
      <Projects />
      <Contact />
     </motion.div>
    </AnimatePresence>
  );
}

export default App;