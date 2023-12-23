import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  //let items = ["Chennai", "Indore", "Mumbai", "Banglore"];
  // const handleSelectItem=(item:String)=>{
  //   console.log(item)
  //}
  const [alertVisible,setAlertVisible] = useState(false);
  return (
    //<div><ListGroup items={items} heading="cities" onSelectItem={(item:String)=>console.log(item)}/></div>;
    /*<div>
      <Alert>
        hello <span>world</span>
      </Alert>
    </div>*/

    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Button color="secondary" onClick={() => {
        setAlertVisible(true);
      }}>
        My Button
      </Button>
    </div>
  );
}

export default App;
