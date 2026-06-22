import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    if (count < 10) {
      setCount((count) => count + 1)
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Counter App</h1>
        </div>
        <div className="counter">
        <button
          type="button"
          
          onClick={() =>{ if(count < 10){ 
            setCount((count) => count + 1)}
          }
        }
        >
          +
        </button>

        <button
          type="button"
          if={count > 0}
          onClick={() =>{ if(count > 0){ 
            setCount((count) => count - 1)}
          }
        }
        >
          -
        </button>
        </div>
        <h2>count: {count}</h2>
      </section>

    </>
  )
}

export default Counter
