import { useState } from "react";

const ChangeName = () => {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(0);

  const UpdateName = () => {
    setName("Afif");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const decrementAge = () => {
    setAge(age - 1);
  };

  const resetAge = () => {
    setAge(0);
  };

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={UpdateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <button onClick={decrementAge}>Decrement Age</button>
      <button onClick={resetAge}>Reset Age</button>
    </>
  );
};

export default ChangeName;
