export default function Hero() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Hi, I'm Arun 👋</h1>

      <h2 style={styles.subtitle}>
        Frontend Developer (React)
      </h2>

      <p style={styles.text}>
        I build fast, responsive websites & web apps for businesses and startups.
      </p>

      <div style={styles.buttons}>
        <a href="#projects" style={styles.primaryBtn}>View Projects</a>
        <a href="#contact" style={styles.secondaryBtn}>Contact Me</a>
      </div>
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
    background: "#0f172a",
    color: "white",
    padding: "20px",
  },
  title: { fontSize: "3rem", marginBottom: "10px" },
  subtitle: { fontSize: "1.5rem", color: "#38bdf8" },
  text: { maxWidth: "500px", marginTop: "10px", opacity: 0.8 },
  buttons: { marginTop: "20px", display: "flex", gap: "10px" },
  primaryBtn: {
    padding: "10px 20px",
    background: "#38bdf8",
    color: "black",
    textDecoration: "none",
    borderRadius: "6px",
  },
  secondaryBtn: {
    padding: "10px 20px",
    border: "1px solid white",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },
};