import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={styles.container}>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.title}
      >
        Hi, I'm Arun
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.subtitle}
      >
        Frontend Developer (React)
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.text}
      >
        I build high-performance, modern web apps and business websites that help companies get more customers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={styles.buttons}
      >
        <a href="#projects" style={styles.primaryBtn}>View Work</a>
        <a href="#contact" style={styles.secondaryBtn}>Contact</a>
      </motion.div>

    </section>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "radial-gradient(circle at top, #1e293b, #0f172a)",
    color: "white",
    padding: "20px",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#38bdf8",
    marginTop: "10px",
  },
  text: {
    maxWidth: "600px",
    marginTop: "15px",
    opacity: 0.8,
    fontSize: "1.1rem",
  },
  buttons: {
    marginTop: "25px",
    display: "flex",
    gap: "15px",
  },
  primaryBtn: {
    padding: "12px 22px",
    background: "#38bdf8",
    color: "#000",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
  secondaryBtn: {
    padding: "12px 22px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    borderRadius: "8px",
    textDecoration: "none",
  },
};