export default function Contact() {
  return (
    <section id="contact" style={styles.container}>
      <h2>Contact Me</h2>

      <p>Email: arunvicky1031@gmail.com</p>

      <a
        href="https://wa.me/917667881192"
        target="_blank"
        style={styles.button}
      >
        Chat on WhatsApp
      </a>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    background: "#25D366",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },
};