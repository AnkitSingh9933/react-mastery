import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <>
    <h2>Counter App</h2>
    <p className="note">Practise increasing, decreasing, and resetting state.</p>
    <p className="counter-value" aria-live="polite">{count}</p>
    <div className="actions">
      <button className="action-button" onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button className="action-button secondary" onClick={() => setCount(prev => prev - 1)}>Decrease</button>
      <button className="action-button secondary" onClick={() => setCount(0)}>Reset</button>
    </div>
  </>
}
