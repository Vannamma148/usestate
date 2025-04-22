import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count <= 20) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
     
   <div className="container">
  <div className="row">
  <h2>Counter App</h2>
      <div className="card">
        <h2 className='heading'> {count}</h2>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>Decremnt</button>
      </div>
  </div>
   </div>
    
    </>
  )
}



export default App
