import {useEffect, useState} from "react";
import styles from "./tweets.module.scss";
import useStore from "../DataStorage.jsx";
const Tweets = () => {
  const tweets = useStore((state) => state.tweets);
  const [onetweet, setOneTweet] = useState(true);
  const [page, setPage] = useState(0);
  const [imageonetweet, SetImageOneTweet] = useState({});
  const Tweet = ({imgsrc, username, text, emotion, likes, comments}) => {
    return (
      <div className={styles.tweet}>
        <div className={styles.profileContainer}>
          <img src={imgsrc}></img>
          <h3>{username}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              {text?.length < 168 ? (
                text
              ) : (
                <div>
                  {text?.slice(0, 160)}
                  <button
                    onClick={() => {
                      SetImageOneTweet({
                        image: imgsrc,
                        username: username,
                        text: text,
                        emotion: emotion,
                      }),
                        setOneTweet(false);
                    }}
                  >
                    more
                  </button>{" "}
                </div>
              )}
            </p>
          </div>
          <div className={styles.details}>
            time- date-
            {emotion}
          </div>
        </div>
        <div className={styles.likes}>
          <p>
            {likes} <i className="fa-regular fa-heart"></i>
          </p>
          <p>
            {comments} <i className="far fa-comment"></i>
          </p>
          <span></span>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.tweetsContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Tweet Selection</h2>
      </div>
      <h2 id={styles.secondTitle}>Your Most Recent Tweets</h2>
      {onetweet ? (
        <div className={styles.tweetContainer}>
          {tweets?.map((tweet, index) => (
            <div key={index}>
              <Tweet
                imgsrc="/profile.png"
                username={tweet.name}
                text={tweet.text}
                emotion={tweet.emotion}
                likes={tweet.likes}
                comments={tweet.comments}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <img src={imageonetweet.image} />
          {imageonetweet.username}
          {imageonetweet.text}
          {imageonetweet.emotion}
          <button onClick={() => setOneTweet(true)}>dsadsa</button>
        </div>
      )}
    </div>
  );
};

export default Tweets;
