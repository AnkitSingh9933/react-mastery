import { useState } from 'react'

export default function UseStateDemo() {
  const [message, setMessage] = useState('React learner')
  return <>
    <h2>1. useState</h2>
    <p className="note">State is data React remembers between renders.</p>
    <p><strong>Current value:</strong> {message}</p>
    <button className="action-button" onClick={() => setMessage('You updated the state!')}>Update state</button>
  </>
}
