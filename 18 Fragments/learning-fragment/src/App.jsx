import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";
import InputAddFriend from "./Components/InputAddFriend";
import { useState } from "react";

function App() {
  /* Fragments can be used in two ways -
        1. <React.Fragment> </React.Fragment>
        2. <> </>

  */

  //Map method
  //this will stay here as this is the parent
  // let friendNames = [
  //   "Rashed",
  //   "Iftiaj",
  //   "Fahim",
  //   "Juwel",
  //   "Gabi",
  //   "Bryan",
  //   "Maisha",
  // ];

  //ternary or conditional rendering
  // let emptyMessage = friendNames.length === 0 ? <h1>I am Looking for Friends</h1> : null;

  //logical rendering
  //{friendNames.length === 0 && <h1>I am Looking for Friends</h1>}

  //State in react using hook
  //Inside useState() we can pass the default value
  //let textStateArr = useState("This is the default text to show using hooks");
  //textStateArr is an array which have 2 elements in it
  //textStateArr[0] has the default value
  //textStateArr[1] will have the updated value
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  //we can do the above useState code in one line
  // let [textToShow, setTextToShow] = useState(
  //   "This is the default text to show using hooks",
  // );

  //convert the friendNames array into a state
  let [friendNames, setFriendNames] = useState([
    "Rashed",
    "Juwel",
    "Iftiaj",
    "Fahim",
  ]);

  //console.log(`Current value of text to show is: ${textToShow}`);

  //we are passing this function to InputAddFriend
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFriendName = event.target.value;
      event.target.value = "";
      //below we are adding new names into the array using spread operator
      let newFriendNames = [...friendNames, newFriendName];
      setFriendNames(newFriendNames);
      console.log(`New friend added is ${newFriendName}`);
    }
    //console.log(event);
    //below code will get the latest text and render the text
    //setTextToShow(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Friends of UCSI</h1>
        <InputAddFriend handleOnKeyDown={onKeyDown} />

        <ErrorMessage names={friendNames} />
        <FoodItems names={friendNames} />
      </Container>
    </>
  );
}

export default App;
