import { Heading } from "@chakra-ui/react";
import CommandInput from "./Commandnput";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading p="10px">Host</Heading>
        <CommandInput />
      </header>
    </div>
  );
}

export default App;
