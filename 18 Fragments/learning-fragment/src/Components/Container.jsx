import styles from "./Container.module.css";

const Container = (props) => {
  //this is the main container.
  //inside of it, all other elements will stay
  //we can style it using this container
  return <div className={styles.containerr}>{props.children}</div>;
};

export default Container;
