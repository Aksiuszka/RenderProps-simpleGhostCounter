import React from 'react';
import Wrapper from './Components/Wrapper';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';


function App() {
  return (
    <div className="App"> 
    <Wrapper render={(count, incrementCounting)=>{
      return (
        <Counter1 count={count} incrementCounting={incrementCounting}/>
      )
      
    }}/>
    <Wrapper render={(count, incrementCounting)=>{
      return (
        <Counter2 count={count} incrementCounting={incrementCounting}/>
      )
      
    }}/>
    </div>
  );
}

export default App;
