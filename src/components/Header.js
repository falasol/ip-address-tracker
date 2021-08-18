import React from "react";
import styles from "./Header.module.css";
import Title from "./Title.js";
import Form from "./Form.js";

const Header = (props) => {
  const onSubmit = (term) => {
    props.onSubmit(term);
  };
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: "url(/pattern-bg.png)" }}
    >
      <Title content="IP Address Tracker"></Title>
      <Form defaultValue={props.ip} onSubmit={onSubmit}></Form>
    </header>
  );
};

export default Header;
