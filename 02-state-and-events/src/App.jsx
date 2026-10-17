import { useState } from 'react'
import UseStateDemo from './concepts/01-useState/UseStateDemo.jsx'
import EventHandlingDemo from './concepts/02-event-handling/EventHandlingDemo.jsx'
import StateUpdatesDemo from './concepts/03-state-updates/StateUpdatesDemo.jsx'
import StateSnapshotDemo from './concepts/04-state-snapshot/StateSnapshotDemo.jsx'
import FunctionalUpdatesDemo from './concepts/05-functional-updates/FunctionalUpdatesDemo.jsx'
import BatchingDemo from './concepts/06-batching/BatchingDemo.jsx'
import CommonMistakesDemo from './concepts/07-common-mistakes/CommonMistakesDemo.jsx'
import Counter from './components/Counter.jsx'

const demos = [
  ['useState', UseStateDemo],
  ['Event handling', EventHandlingDemo],
  ['State updates', StateUpdatesDemo],
  ['State snapshot', StateSnapshotDemo],
  ['Functional updates', FunctionalUpdatesDemo],
  ['Batching', BatchingDemo],
  ['Common mistakes', CommonMistakesDemo],
  ['Counter app', Counter],
]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ActiveDemo = demos[activeIndex][1]

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">REACT MASTERY · MODULE 02</p>
        <h1>State and Events</h1>
        <p>Small demos to practise one React concept at a time.</p>
      </header>
      <nav className="tabs" aria-label="Choose a concept">
        {demos.map(([label], index) => (
          <button className={activeIndex === index ? 'tab active' : 'tab'}
            key={label} onClick={() => setActiveIndex(index)}>{label}</button>
        ))}
      </nav>
      <section className="demo-card"><ActiveDemo /></section>
      <footer>Learn the concept first, then experiment with the code.</footer>
    </main>
  )
}
