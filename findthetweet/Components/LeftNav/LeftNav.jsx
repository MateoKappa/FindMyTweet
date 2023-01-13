import styles from "../LeftNav/LeftNav.module.scss";
import useStore from "../DataStorage.jsx";
import { useState } from "react";
import TweetsData from "../TweetsData";

const LeftNav = () => {
  let tweetsD = TweetsData;
  const tweets = useStore((state) => state.tweets);
  const setPages = useStore((state) => state.setPages);
  const setTweets = useStore((state) => state.setTweets);
  const [name, setName] = useState('Alex');
  console.log("this is the name: ", name);

  // const Filter = ({ filter_title, logo_image_source }) => {
  //   return (
  //     <div className={styles.filter}>
  //       <div className={styles.filter_objects}>
  //         <img src={logo_image_source}></img>
  //         <h3>{filter_title}</h3>
  //       </div>
  //     </div>
  //   );
  // };

  const filter = () => {
    if (name == "Alex") {
      tweetsD = tweetsD.filter((tweet) => tweet.username == "Alex");
    } else if (name == "Mateo") {
      tweetsD = tweetsD.filter((tweet) => tweet.username == "Mateo");
    } else if (name == "Panagiotis") {
      tweetsD = tweetsD.filter((tweet) => tweet.username == "Panagiotis");
    }

    console.log(tweetsD);
  }



  const settingTweets = () => {
    setTweets([...tweets, ...tweetsD]);
    setPages(true);
    filter();
  };
  // const settingPages = () => {
  // };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/Εικόνα1.png"></img>
      </div>
      <section className={styles.filter_container}>
        {/* <input
          className={styles.search}
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <select name="users" id="user" onChange={(e) => setName(e.target.value)}>
          <option value="Alex">Alex</option>
          <option value="Mateo">Mateo</option>
          <option value="Panagiotis">Panagiotis</option>
        </select>

        <button className={styles.submit}
          onClick={() => {
            settingTweets();
          }}>
          SUBMIT
        </button>
      </section>
    </div>
  );
};

export default LeftNav;
