import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chat App",
    desc: "Real-time Gemini AI chatbot with streaming responses.",
    link: "https://arun-gpt-five.vercel.app/",
  },
  {
    title: "Clinic Website",
    desc: "Appointment booking + WhatsApp integration.",
  },
  {
    title: "Restaurant Website",
    desc: "Modern menu + contact system.",
  },
];

export default function Projects() {
    const [hovered, setHovered] = useState(false);
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          style={{
    ...styles.card,
    transform: hovered ? "translateY(-5px)" : "translateY(0)",
    boxShadow: hovered
      ? "0 10px 30px rgba(56,189,248,0.3)"
      : "none",
  }}
    onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            {p.link && (
              <a href={p.link} target="_blank" style={styles.link}>
                Live Demo →
              </a>
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
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #334155",
   transition: "all 0.3s ease",
cursor: pointer,
  },
  link: {
    color: "#38bdf8",
    display: "inline-block",
    marginTop: "10px",
  },
};