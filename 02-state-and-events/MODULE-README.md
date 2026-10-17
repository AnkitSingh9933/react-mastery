# Module 02 — Revision Checklist

- [ ] Understand useState
- [ ] Handle button click events
- [ ] Explain state updates and re-rendering
- [ ] Explain a state snapshot
- [ ] Use functional state updates
- [ ] Understand batching
- [ ] Avoid common mistakes
- [ ] Build and test the Counter App

## Quick reminders
- State is data React remembers between renders.
- Use a setter to request an update; don't mutate state directly.
- A state variable belongs to that render's snapshot.
- Use `setCount(prev => prev + 1)` when next state depends on previous state.
- Use `onClick={handleClick}`, not `onClick={handleClick()}`.
- Call Hooks at the top level of a component, not inside conditions or loops.
