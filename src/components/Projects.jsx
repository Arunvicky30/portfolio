export default function Projects() {
  return (
    <section id="projects" style={styles.container}>
      <h2>Projects</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>AI Chat App</h3>
          <p>React + Gemini API chatbot with streaming responses.</p>
          <a href="https://arun-gpt-five.vercel.app/" target="_blank">
            Live Demo
          </a>
        </div>

        <div style={styles.card}>
          <h3>Clinic Website (Demo)</h3>
          <p>Appointment booking + WhatsApp integration.</p>
        </div>

        <div style={styles.card}>
          <h3>Restaurant Website (Demo)</h3>
          <p>Menu, contact form, and responsive design.</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
};