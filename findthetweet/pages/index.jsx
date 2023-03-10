import styles from "../Components/Index.module.scss";
import LeftNav from "../components/LeftNav/LeftNav";
import Tweets from "../components/Tweets/Tweets";
import Map from "../components/Map/Map";
import { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

export default function Home() {
  const [page, setPage] = useState(true);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div className={styles.main}>
      <LeftNav />
      <Tweets />
      <Map long={22.94271} lang={39.37303} setVisible={setVisible} />
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        style={{ height: 200 }}
      >
        dsadsa
      </Modal>
    </div>
  );
}
