import { useState } from 'react'

export default function StateSnapshotDemo() {
  const [count, setCount] = useState(5)
  const [lastValues, setLastValues] = useState(null)
  function handleClick() {
    const nextCount = count + 1
    setCount(nextCount)
    setLastValues({ countSnapshot: count, nextCount })
  }
  return <>
    <h2>4. State snapshot</h2>
    <p className="note"><code>count</code> belongs to the current render; <code>nextCount</code> is an ordinary JavaScript variable.</p>
    <p><strong>Rendered count:</strong> {count}</p>
    <button className="action-button" onClick={handleClick}>Calculate next count</button>
    {lastValues && <p>Inside the handler: count was {lastValues.countSnapshot}; nextCount was {lastValues.nextCount}.</p>}
  </>
}
