import {KGButton, Heading} from "./KGButton.jsx"
import DynaCom from "./DynaCom.jsx";
import Random from "./Randorm.jsx";
//componet is just a function
//this is a function based component
function App(){
  //this is not html
  //this is jsx
  return <div>
            <h1>Hello World from React!</h1>
            <KGButton></KGButton>
            <Heading></Heading>
            <DynaCom></DynaCom>
            <Random></Random>
        </div>
}

export default App;