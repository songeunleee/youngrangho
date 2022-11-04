import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./home.module.css";

const Home = (props) => (
  <section className={styles.home}>
    <Header />
    <div className={styles.info}>
      <img className={styles.img} src="./images/main2.jpg" alt="main" />
      <p className={styles.text}>영랑호</p>
    </div>
    <Footer />
  </section>
);

export default Home;
