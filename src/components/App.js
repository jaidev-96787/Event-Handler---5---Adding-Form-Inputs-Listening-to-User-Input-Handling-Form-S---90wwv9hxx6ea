import React from 'react'
import '../styles/App.css';
const App = () => {

  const onSubmitHanler = (event) => {
      event.preventDefault();
      console.log("form submitted");
  }
  return (
    <div id="main">
      <form onSubmit={onSubmitHanler}>
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
