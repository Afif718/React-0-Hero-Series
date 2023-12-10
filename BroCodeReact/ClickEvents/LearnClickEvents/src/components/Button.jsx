const Button = () => {
  //   let count = 0;
  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} cliked me ${count} times`);
  //     } else {
  //       console.log(`${name} stop clicking me`);
  //     }
  //   };

  const handleClick = (e) => (e.target.textContent = "Ouch!");

  return (
    <>
      <button onClick={(e) => handleClick(e)}>Click Me</button>
    </>
  );
};

export default Button;
