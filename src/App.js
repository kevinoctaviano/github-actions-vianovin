import React, { useState } from 'react';
import './App.css';
// import Counter from './Counter';
import FunctionalCounter from './pages/FunctionalCounter';

function App() {
  let [counter, setCount] = useState(0);

  let increment = () => {
    return setCount(counter + 1);
  };

  let decrement = () => {
    return setCount(counter - 1);
  };
  return (
    <div className="container">
      {/* <Counter /> */}
      <FunctionalCounter count={counter} inc={increment} dec={decrement} />
    </div>
  );
}

export default App;
