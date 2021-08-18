import React from "react";
import styles from "./Form.module.css";

class Form extends React.Component {
  state = { input: this.props.defaultValue };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  componentDidUpdate(prevProps) {
    if (this.props.defaultValue !== prevProps.defaultValue) {
      this.setState({ input: this.props.defaultValue });
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <input
          type="text"
          className={styles.form__input}
          value={this.state.input}
          onChange={this.onInputChange}
        />
        <button
          type="submit"
          className={styles.form__button}
          style={{ backgroundImage: "url(/icon-arrow.svg)" }}
        ></button>
      </form>
    );
  }
}

export default Form;
