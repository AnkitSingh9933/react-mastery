# Module 02 — State and Events

A hands-on React module focused on managing component state, handling user events, and understanding how React updates the UI.

## Topics Covered

- [x] `useState` Hook
- [x] Event Handling
- [x] State Updates and Re-rendering
- [x] State Snapshots
- [x] Functional State Updates
- [x] Batching
- [x] Common React Mistakes
- [x] Counter App

## Project Structure

```text
02-state-and-events/
├── public/
├── src/
│   ├── components/
│   │   └── Counter.jsx
│   ├── concepts/
│   │   ├── 01-useState/
│   │   ├── 02-event-handling/
│   │   ├── 03-state-updates/
│   │   ├── 04-state-snapshot/
│   │   ├── 05-functional-updates/
│   │   ├── 06-batching/
│   │   └── 07-common-mistakes/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Key Learnings

### 1. useState

React Hook used to add state to a functional component.

### 2. Event Handling

Handle user interactions using event handlers such as `onClick`.

### 3. State Updates

Updating state requests React to render the component with the updated value.

### 4. State Snapshots

A state variable represents the value from the current render. Calling its setter does not change that variable immediately inside the same event handler.

### 5. Functional State Updates

Use the previous state to calculate the next state:

```jsx
setCount((prev) => prev + 1);
```

This is useful when the next value depends on the previous value.

### 6. Batching

React can group multiple state updates to reduce unnecessary rendering work.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Practice Project

The Counter App includes:

- Increase count
- Decrease count
- Reset count
- Functional state updates

## Learning Goal

Understand how React state and event handling work together to build interactive user interfaces.

---

Part of my React learning journey — **React Mastery**.
