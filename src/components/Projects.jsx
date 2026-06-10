import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chat App",
    desc: "Real-time Gemini AI chatbot with streaming responses.",
    link: "https://arun-gpt-five.vercel.app/",
    status: "live",
  },
  {
    title: "Clinic Website",
    desc: "Appointment booking + WhatsApp integration.",
    status: "coming",
  },
  {
    title: "Restaurant Website",
    desc: "Modern menu + contact system.",
    status: "coming",
  },
];

export default function Projects() {
  return (
    <section style={styles.container} id="projects">
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: p.status === "live" ? 1.05 : 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              ...styles.card,
              opacity: p.status === "coming" ? 0.7 : 1,
            }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            {p.status === "live" ? (
              <a href={p.link} target="_blank" style={styles.link}>
                Live Demo →
              </a>
            ) : (
              <span style={styles.coming}>Coming Soon 🚧</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "100px 20px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  link: {
    color: "#38bdf8",
    display: "inline-block",
    marginTop: "10px",
  },
  coming: {
    display: "inline-block",
    marginTop: "10px",
    color: "#fbbf24",
    fontWeight: "500",
  },
};