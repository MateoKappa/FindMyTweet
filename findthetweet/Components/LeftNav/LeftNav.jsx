import styles from "../LeftNav/leftNav.module.scss";
import useStore from "../DataStorage.jsx";
import {useState} from "react";
import TweetsData from "../TweetsData";
const LeftNav = () => {
  let tweetsD = TweetsData;
  const geo = useStore((state) => state.Geo);
  const setGeo = useStore((state) => state.setGeo);
  const [name, setName] = useState();
  const Tweets = useStore((state) => state.Tweets);
  const Filter = ({filter_title, logo_image_source}) => {
    return (
      <div className={styles.filter}>
        <div className={styles.filter_objects}>
          <img src={logo_image_source}></img>
          <h3>{filter_title}</h3>
        </div>
      </div>
    );
  };

  const settingGeo = () => {
    setGeo([...geo, tweetsD]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/Εικόνα1.png"></img>
      </div>
      <section className={styles.filter_container}>
        <input
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={() => settingGeo()}>SUBMIT</button>
        {Tweets}
      </section>
    </div>
  );
};

export default LeftNav;
