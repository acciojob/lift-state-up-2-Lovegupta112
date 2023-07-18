
import React ,{useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {

  const[inputValue,setInputValue]=useState('');
  return (
    <div style={{backgroundColor:'#a2ec0b',padding:'1rem'}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
      <p>{inputValue}</p>
      <Child setValue={setInputValue}/>
    </div>
  )
}

export default App
