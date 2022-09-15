import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

const works = [
  {
    title: "VOLTA at University of Redlands",
    text1: "Oct 10-14, 2022",
    text2: "Redlands, CA",
    linkText: "View schedule",
    link: "/redlands",
    thumbnail: "BITE2.png",
  },
  {
    title: "MILK",
    text1: "Nov 10-12, 2022",
    text2: "Institute of Art and Olfaction",
    linkText: "Buy tickets",
    link: "http://tickets.voltacollective.com",
    thumbnail: "/milk.png",
  },
  {
    title: "",
    text1: "",
    text2: "",
    linkText: "",
    link: "",
    thumbnail: "",
  },
];

export default function Upcoming() {
  return (
    <Layout>
      <div className="title">Upcoming</div>
      <div className={styles.workMain}>
        <div className="">
          {works.map((work) => (
            <div className="md:max-w-sm max-w-xs pb-12">
              <img src={work.thumbnail} />
              <div className="subtitle py-4">{work.title}</div>
              <div className={styles.workText}>{work.text1}</div>
              <div className={styles.workText}>{work.text2}</div>
              <a
                style={{ textDecoration: "underline" }}
                href={work.link}
                target="_blank"
              >
                {work.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}