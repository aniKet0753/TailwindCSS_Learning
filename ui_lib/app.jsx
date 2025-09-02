import "./App.css";
import { Button } from "../src/component/buttonCom";
import ShareIcon from "../src/icon/shareicon";
import AddIcon from "./icon/addIcon";
function App() {
  return (
    <>
      <Button
        variant="primary"
        size="md"
        text="Share"
        startIcon={<ShareIcon />}
        onClick={() => console.log("Primary button clicked")}
      />
      <Button 
      variant="secondary"
      size="sm"
      text="Add"
      startIcon={<AddIcon />}
      onClick={()=> console.log("you clicked add ")}
      />
    </>
  );
}

export default App;
