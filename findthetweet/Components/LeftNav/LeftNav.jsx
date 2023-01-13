import styles from "../LeftNav/leftNav.module.scss";
import useStore from "../DataStorage.jsx";
import {useState} from "react";
import TweetsData from "../TweetsData";
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
const LeftNav = () => {
  let tweetsD = TweetsData;
  const tweets = useStore((state) => state.tweets);
  const setPages = useStore((state) => state.setPages);
  const setTweets = useStore((state) => state.setTweets);
  const [name, setName] = useState();
  const [emotion, setEmotion] = useState();
  const [location, setLocation] = useState();
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
  const datas1 = async () => {
    console.log(name, emotion, location);
    const records = await pb.collection("tweets").getList(1, 50, {
      filter:
        name && emotion && location
          ? `name = "${name}" && emotion = "${emotion}"  && location = "${location}"`
          : name && emotion
          ? `name = "${name}" && emotion = "${emotion}"`
          : name && location
          ? `name = "${name}" && location = "${location}"`
          : emotion && location
          ? `emotion = "${emotion}" && location = "${location}"`
          : name
          ? `name = "${name}"`
          : emotion
          ? `emotion = "${emotion}"`
          : location
          ? ` location = "${location}"`
          : `name = ""`,
    });
    console.log(records.items);
    setTweets([...records.items]);
    setPages(true);
  };
  // const settingGeo = () => {
  //   setTweets([...tweetsD]);
  //   setPages(true);
  // };

  // const fetchData = async () => {
  //   const {data, error} = await supabase
  //     .from("tweets")
  //     .select()
  //     .eq("name", "Mateo");
  //   setTweets([...data]);
  //   console.log(data);
  //   setPages(true);
  // };
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
        <input
          placeholder="emotion"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
        />
        <input
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={() => {
            datas1();
          }}
        >
          SUBMIT
        </button>
      </section>
    </div>
  );
};

export default LeftNav;
