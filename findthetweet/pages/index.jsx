import styles from "../Components/Index.module.scss";
import LeftNav from "../components/LeftNav/LeftNav";
import Tweets from "../components/Tweets/Tweets";
import Map from "../components/Map/Map";

export default function Home() {
  return (
    <div className={styles.main}>
      <LeftNav />
      <Tweets />
      Yeah o alekos gamietai
      <Map long={22.99299} lang={39.357669} />
    </div>
  );
}

// import Head from "next/head";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import WebApp from "../Components/WebApp/WebApp";
// const [page, setPage] = useState(true);
{
  /* <AnimatePresence>
  {page && (
    <motion.div
      className={styles.text}
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" }}
      exit={{
        opacity: 0,
        transition: {
          duration: "0.25",
        },
      }}
    >
      Welcome to Find My Tweet!
    </motion.div>
  )}
</AnimatePresence>
{!page && <WebApp />}

<AnimatePresence>
  {page && (
    <motion.div
      exit={{
        x: -1700,
        transition: {
          delay: "0.35",
          duration: "0.6",
        },
      }}
      className={styles.LeftBackground}
    ></motion.div>
  )}
</AnimatePresence>
<AnimatePresence>
  {page && (
    <motion.div
      exit={{
        x: 1700,
        transition: {
          delay: "0.35",
          duration: "0.6",
        },
      }}
      className={styles.RightBackground}
    ></motion.div>
  )}
</AnimatePresence>

<button
  onClick={() => {
    setPage(!page);
  }}
  className={styles.button}
>
  HELLO WTF
</button> */
}
