import React from "react";
import Header from "../header/header";
import styles from "./home.module.css";

const Home = (props) => (
  <section className={styles.home}>
    <Header />
    <img className={styles.img} src="./images/main.jpg" alt="main" />
    <p className={styles.text}>영랑호</p>
  </section>
);

export default Home;
