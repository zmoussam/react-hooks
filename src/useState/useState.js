import React, {useState} from 'react';
// function countInitial() {
//   console.log('run function');
//   return 4;
// }

function State() {
  // const [count, setCount] = useState(() => countInitial()); // run only once
  const [state, setState] = useState({count: 4, theme: 'blue'}); // run every time
  const theme = state.theme;
  const count = state.count;

  function decrementStateCount() {
    setState((prevState) => {
      // because it overwrites the state, we need to copy the previous state
      return {...prevState, count: prevState.count - 1};
    });
  }
  function incrementeStateCount() {
    setState((prevState) => {
      // because it overwrites the state, we need to copy the previous state
      return {...prevState, count: prevState.count + 1};
    });
  }

  // function decrementCount() {
  //   setCount((prevCount) => prevCount - 1);
  // }

  // function incrementeCount() {
  //   setCount((prevCount) => prevCount + 1);
  // }

    return (
      <>
          <button onClick={decrementStateCount}>-</button>
          <span>{count}  </span>
          <span>{theme}</span>
          <button onClick={incrementeStateCount}>+</button>
      </>
    );
  }
  
  export default State;