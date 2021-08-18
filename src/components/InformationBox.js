import React from "react";
import styles from "./InformationBox.module.css";

const InformationBox = (props) => {
  return (
    <div className={styles["information-box"]}>
      <h3 className={styles["information-box__title"]}>{props.title}</h3>
      <p className={styles["information-box__content"]}>{props.content}</p>
    </div>
  );
};

export default InformationBox;
