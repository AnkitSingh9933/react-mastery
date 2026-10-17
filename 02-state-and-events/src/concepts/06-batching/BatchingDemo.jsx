import { useState } from 'react'

export default function BatchingDemo() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Try the button')
  function handleClick() {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setMessage('Two state updates were queued in one event')
  }
  function reset() { setCount(0); setMessage('Try the button') }
  return <>
    <h2>6. Batching</h2>
    <p className="note">React can group state updates from the same event to render efficiently.</p>
    <p className="counter-value">{count}</p>
    <p>{message}</p>
    <div className="actions">
      <button className="action-button" onClick={handleClick}>Add 2 and update message</button>
      <button className="action-button secondary" onClick={reset}>Reset</button>
    </div>
  </>
}
