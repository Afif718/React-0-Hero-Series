import "./App.css";
import AppContainer from "./Components/AppContainer";
import AppHeading from "./Components/AppHeading";
import FriendNames from "./Components/FriendNames";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let names = ["A", "B", "C", "D"];

  return (
    <AppContainer>
      <AppHeading />
      <FriendNames names={names} />
      <ErrorMessage names={names} />
    </AppContainer>
  );
}

export default App;
