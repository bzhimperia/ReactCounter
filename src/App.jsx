import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    setWarning(false);
    setButtonDisabled(false);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      setWarning(false);
    } else {
      setWarning(true);
      setButtonDisabled(true);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>
      <button onClick={decrement} disabled={buttonDisabled}>-1</button>
        <span>{count}</span>
        <button onClick={increment}>+1</button>
      </div>
      {warning && <p style={{ color: 'red' }}>Ce compteur ne descend pas en dessous de 0</p>}
    </div>
  );
}

export default Counter;