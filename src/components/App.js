import React from "react";
import blogData from "../data/blog";
import header from './header'
import about from './about'
console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
     <div>
      <header name={jina} />
      <about  />
     </div>
    </div>
  );
}

export default App;
