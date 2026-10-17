import { useState } from 'react'

export default function FunctionalUpdatesDemo() {
  const [count, setCount] = useState(5)
  function addOneTwice() {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  function directUpdateTwice() {
    setCount(count + 1)
    setCount(count + 1)
  }
  return <>
    <h2>5. Functional state updates</h2>
    <p className="note">Compare the buttons. Functional updates are useful when next state depends on previous state.</p>
    <p className="counter-value">{count}</p>
    <div className="actions">
      <button className="action-button" onClick={addOneTwice}>Functional +2</button>
      <button className="action-button secondary" onClick={directUpdateTwice}>Direct update twice</button>
      <button className="action-button secondary" onClick={() => setCount(5)}>Reset to 5</button>
    </div>
  </>
}
