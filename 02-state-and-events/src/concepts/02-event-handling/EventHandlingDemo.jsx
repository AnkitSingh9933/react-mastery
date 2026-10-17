import { useState } from 'react'

export default function EventHandlingDemo() {
  const [message, setMessage] = useState('No click yet')
  function handleClick() { setMessage('Button clicked!') }
  return <>
    <h2>2. Event handling</h2>
    <p className="note">Pass a function with <code>onClick={'{handleClick}'}</code>; don't call it during render.</p>
    <p>{message}</p>
    <button className="action-button" onClick={handleClick}>Click me</button>
  </>
}
