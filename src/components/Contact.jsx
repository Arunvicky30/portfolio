import { motion } from "framer-motion";

export default function Contact() {
  const handleWhatsApp = () => {
    const message =
      "Hi Arun, I saw your portfolio. I need a website for my business.";

    window.open(
      `https://wa.me/917667881192?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section style={styles.container} id="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Let's Build Something
      </motion.h2>

      <p>Get a modern website for your business in 3–5 days.</p>

      <button onClick={handleWhatsApp} style={styles.button}>
        Message on WhatsApp
      </button>
    </section>
  );
}

const styles = {
  container: {
    padding: "100px 20px",
    textAlign: "center",
    background: "#020617",
    color: "white",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#25D366",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
};