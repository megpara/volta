import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from "../styles/Pitch.module.css";

export default function Pitch() {
  return (
    <Layout>
      <div className={styles.container}>
        <img className={styles.pitch} src="MythologyPitchJeanetta.png" />
        <div className={styles.subtext}>
          <a href="https://jeanettarich.cargo.site/About" target="_blank">
            More about Jeanetta Rich
          </a>
          <a
            href="https://artandolfaction.com/"
            target="_blank"
            style={{ display: "block", paddingTop: "20px" }}
          >
            More about the Institute of Art and Olfaction
          </a>
          <a
            href="https://www.melissaachten.com/"
            target="_blank"
            style={{ display: "block", paddingTop: "20px" }}
          >
            More about Melissa Achten
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
