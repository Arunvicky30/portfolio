export default function About() {
  return (
    <section id="about" style={styles.container}>
      <h2>About Me</h2>

      <p style={styles.text}>
        I am a Frontend Developer with 7+ years of experience specializing in React.
        I build modern, responsive web applications and business websites.
      </p>

      <div style={styles.skills}>
        <span>React</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Vite</span>
        <span>Git</span>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  text: {
    maxWidth: "600px",
    margin: "20px auto",
    opacity: 0.8,
  },
  skills: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
};