import React from "react";
import Header from "../header/header";
import styles from "./home.module.css";

const Home = (props) => (
  <section className={styles.home}>
    <Header />
    <img src="public/images/main.jpg" width={100px} alt="" />
  </section>
);

export default Home;
