import './App.css';
import Counter from "./myComponent/Counter.js";
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount(count + 1)
  }

  const handleCountMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  
  const getInputValue = () =>{
    // console.log('hit')
  }

  // {input ? input + props.count : props.count} onChange={(e) => setInput(e.target.value)


  return (
    <div>
      <Counter plus={handleCountPlus} getInput={getInputValue} minus={handleCountMinus} count={count} title="Add to cart"/>
    </div>
  );

}

export default App;
