import styles from "../Components/Index.module.scss";
import LeftNav from "../components/LeftNav/LeftNav";
import Tweets from "../components/Tweets/Tweets";
import Map from "../components/Map/Map";

export default function Home() {
  return (
    <div className={styles.main}>
      <LeftNav />
      <Tweets />
      <Map long={22.94271} lang={39.37303} />
    </div>
  );
}