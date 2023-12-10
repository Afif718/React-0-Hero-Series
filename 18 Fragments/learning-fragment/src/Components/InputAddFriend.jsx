/* eslint-disable react/prop-types */
import styles from "./InputAddFriend.module.css";

const InputAddFriend = ({ handleOnKeyDown }) => {
  return (
    <>
      <input
        className={styles.inputAdd}
        type="text"
        placeholder="Add Friend To the List"
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
};

export default InputAddFriend;
