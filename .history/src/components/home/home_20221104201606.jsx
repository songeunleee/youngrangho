import React from "react";
import Header from "../header/header";
import styles from "./home.module.css";

const Home = (props) => (
  <section className={styles.home}>
    <Header />
    <img className={styles.img} src="./images/main.jpg" alt="main" />
  </section>
);

export default Home;
