import React from "react";
import Header from "../header/header";
import styles from "./home.module.css";

const Home = (props) => (
  <section className={styles.home}>
    <Header />
    <div className={styles.info}>
      <img src="public/images/main2.jpg" alt="" />
      <p className={styles.text}>영랑호</p>
    </div>
  </section>
);

export default Home;
