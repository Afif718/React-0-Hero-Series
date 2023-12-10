import "./App.css";
import List from "./Components/List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", cal: 95 },
    { id: 2, name: "Mango", cal: 85 },
    { id: 3, name: "Coconut", cal: 44 },
    { id: 4, name: "Banana", cal: 76 },
  ];

  return (
    <>
      {fruits.length > 0 ? (
        <List fruitList={fruits} />
      ) : (
        <h1>Add Fruits to the list</h1>
      )}
    </>
  );
}

export default App;
