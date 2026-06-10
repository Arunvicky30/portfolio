import { motion } from "framer-motion";

export default function About() {
  return (
    <section style={styles.container}>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.title}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.text}
      >
        I am a Frontend Developer with 7+ years of experience specializing in React.
        I build fast, scalable, and modern web applications and business websites
        that help companies improve their online presence and get more customers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        style={styles.skills}
      >
        {[
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Vite",
          "Git",
          "API Integration",
        ].map((skill, i) => (
          <span key={i} style={styles.badge}>
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

const styles = {
  container: {
    padding: "100px 20px",
    textAlign: "center",
    background: "#0f172a",
    color: "white",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  text: {
    maxWidth: "700px",
    margin: "0 auto",
    opacity: 0.8,
    fontSize: "1.1rem",
    lineHeight: "1.6",
  },
  skills: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
  badge: {
    padding: "8px 14px",
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "20px",
    fontSize: "0.9rem",
  },
};