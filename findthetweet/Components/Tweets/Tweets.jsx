import {useEffect, useState} from "react";
import styles from "./tweets.module.scss";
import useStore from "../DataStorage.jsx";
const Tweets = () => {
  const tweets = useStore((state) => state.tweets);
  const [onetweet, setOneTweet] = useState(true);
  const pages = useStore((state) => state.pages);
  const [imageonetweet, SetImageOneTweet] = useState({});
  const [pagesNumber, setPagesNumber] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    let a, i;
    let array = [];
    if (tweets.length % 6 == 0) {
      a = tweets.length / 6;
      console.log(a);
    } else {
      a = tweets.length / 6 + 1;
      console.log(a);
    }
    for (i = 1; i <= a; i++) {
      array.push(i);
      console.log(array, "im in");
    }
    setPagesNumber(array);
  }, [pages]);

  const Tweet = ({imgsrc, username, text, emotion, likes, comments}) => {
    return (
      <div
        className={styles.tweet}
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
          {tweets
            ?.filter(
              (item, index) =>
                (index >= 6 * currentPage - 6) & (index <= 6 * currentPage - 1)
            )
            .map((tweet, index) => (
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
          {pagesNumber?.map((page, index) => (
            <div
              className={styles.pagesCount}
              key={index}
              style={{
                left: `calc(${page}*50px + 50px)`,
                position: "absolute",
                bottom: "30px",
                fontSize: 25,
              }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
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
