
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
           <p>Button clicked {count} times.</p>
           <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

/**
 * 
 * git add .
 * git commit -m "message"
 * git push
 */

export default App
