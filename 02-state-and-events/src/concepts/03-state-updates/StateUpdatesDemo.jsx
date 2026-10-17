import { useState } from 'react'

export default function StateUpdatesDemo() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
    console.log('Current render snapshot:', count)
  }
  return <>
    <h2>3. State updates and re-rendering</h2>
    <p className="note">Click and watch the UI update. Check the browser console for the current handler's snapshot.</p>
    <p className="counter-value">{count}</p>
    <button className="action-button" onClick={handleClick}>Increase</button>
  </>
}
