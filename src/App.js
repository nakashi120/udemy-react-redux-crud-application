import React from 'react'

const App = () =>  {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={()=>{console.log("I am checked.")}}/>
    </React.Fragment>
  );
}

export default App;
