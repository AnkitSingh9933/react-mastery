import { useState } from 'react'

export default function CommonMistakesDemo() {
  const [count, setCount] = useState(0)
  function handleClick() { setCount(prev => prev + 1) }
  return <>
    <h2>7. Common mistakes</h2>
    <ul>
      <li>Don't mutate state directly.</li>
      <li>Don't expect the state variable to change immediately inside the same handler.</li>
      <li>Use <code>onClick={'{handleClick}'}</code>, not <code>onClick={'{handleClick()}'}</code>.</li>
      <li>Call Hooks at the top level, not inside conditions or loops.</li>
      <li>Use a functional updater when next state depends on previous state.</li>
    </ul>
    <p className="counter-value">{count}</p>
    <button className="action-button" onClick={handleClick}>Safe increment</button>
  </>
}
