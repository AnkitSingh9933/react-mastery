# ☕ 01 — Basic React: Anatomy of a React App

This module explores the fundamental architecture of a React application, including JSX syntax, component creation, component composition, and the rendering process.

The goal is to understand not only how to write React code, but also how the different parts of a React application work together.

---

## 🎯 Learning Objectives

By completing this module, I learned how to:

- Understand the fundamentals of React and component-based UI development.
- Write JSX and understand how build tools transform it.
- Create and export reusable functional components.
- Import and compose components inside other components.
- Understand the role of `index.html` and `main.jsx`.
- Use React Fragments to group sibling elements without adding extra DOM nodes.
- Understand the basic React rendering flow and common JSX rules.

---

## 🧠 Core Concepts Learned

### 1. What Is React?

**React is an open-source JavaScript library for building user interfaces using reusable components.**

React follows a declarative approach: developers describe what the UI should look like, and React manages the necessary UI updates when relevant data changes.

Key concepts:

- **Components:** Reusable building blocks of a user interface.
- **JSX:** A syntax extension that lets developers describe UI using HTML-like markup inside JavaScript.
- **Component Composition:** Combining smaller components to build larger interfaces.
- **Rendering:** React uses component output to determine what should appear in the UI.

### 2. JSX — JavaScript XML

**JSX is a JavaScript syntax extension that allows HTML-like markup to be written inside JavaScript code.**

Browsers do not execute JSX directly. A build tool such as Vite transforms JSX into JavaScript that the browser can execute.

Example:

```jsx
const element = <h1>Hello, React!</h1>;
```

With the modern automatic JSX runtime, this can be transformed into code conceptually similar to:

```javascript
import { jsx as _jsx } from "react/jsx-runtime";

const element = _jsx("h1", {
  children: "Hello, React!"
});
```

The exact generated output depends on the compiler and its configuration. JSX is not necessarily transformed into `React.createElement()` calls.

#### Important JSX Rules

- Return a single root element or use a Fragment when rendering multiple sibling elements.
- Close tags properly, including self-closing elements such as `<img />` and `<input />`.
- Use `className` instead of `class`.
- Use camelCase for most JSX event handlers, such as `onClick`.
- Place JavaScript expressions inside curly braces `{}`.
- Component names must begin with an uppercase letter.

### 3. The Entry Point — `main.jsx`

The `index.html` file provides the HTML document and a root DOM element where React can render the application.

Example from `index.html`:

```html
<div id="root"></div>
```

The `main.jsx` file connects the React application to this DOM element.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

#### Key Responsibilities

- **`createRoot()`:** Creates a React root associated with a DOM element.
- **`render()`:** Renders the React component tree into that root.
- **`StrictMode`:** Enables additional development-only checks that help identify potential problems.

`StrictMode` can cause certain functions and Effects to run additional times in development to help reveal bugs. These checks are not performed in the same way in production.

### 4. Creating a Custom Component — `Chai.jsx`

React applications are built using components. A function component returns a React node describing part of the UI.

Example:

```jsx
function Chai() {
  return <h2>This is an h2 from the Chai component.</h2>;
}

export default Chai;
```

#### Important Concepts

- **PascalCase:** Custom component names begin with an uppercase letter, such as `Chai`.
- **Function Component:** A JavaScript function that returns a React node.
- **Default Export:** Makes the component available for import in another module.
- **Reusability:** The same component can be used in multiple places.

A component can return JSX, another valid React node, or `null`. When returning multiple sibling JSX elements, use a common parent or a Fragment.

### 5. Component Composition — `App.jsx`

Component composition means combining smaller components to create a larger UI.

Example:

```jsx
import Chai from "./Chai.jsx";

function App() {
  return (
    <>
      <h1>This is the main App component.</h1>
      <Chai />
    </>
  );
}

export default App;
```

#### Why Use Fragments?

The Fragment syntax `<>...</>` groups multiple sibling elements without introducing an additional DOM element.

Without a Fragment or another parent element, multiple sibling JSX elements cannot be returned directly as one JSX expression.

#### Understanding Component Nesting

- `App` is the parent component.
- `Chai` is rendered as a child component.
- `<Chai />` tells React to render the `Chai` component.
- Components can be composed to build increasingly complex interfaces.

---

## 🔄 React Application Execution Flow

The following diagram shows the simplified relationship between the files in this module.

```text
index.html
    |
    | Contains <div id="root">
    v
main.jsx
    |
    | createRoot() and render()
    v
App.jsx
    |
    | Renders the main UI
    v
Chai.jsx
    |
    | Returns its JSX content
    v
Rendered User Interface
```

### How the Flow Works

1. The browser loads `index.html`.
2. Vite loads the JavaScript entry point, `main.jsx`.
3. `createRoot()` connects React to the root DOM element.
4. React renders the `App` component.
5. `App` includes the `Chai` component in its output.
6. React manages the resulting UI in the browser DOM.

This is a simplified conceptual flow, not a complete description of React's internal rendering and reconciliation algorithms.

---

## ⚠️ Common Mistakes and Pitfalls

| Mistake | Correct Approach |
|---|---|
| Writing `<chai />` for a custom component | Use `<Chai />` |
| Returning multiple sibling JSX elements without a common root | Use a parent element or Fragment |
| Using `class` in JSX | Use `className` |
| Forgetting to close a JSX tag | Close the tag properly |
| Forgetting to export or import a component | Verify the corresponding export and import |
| Assuming the browser executes JSX directly | JSX must be transformed before browser execution |
| Assuming `StrictMode` causes the same extra checks in production | Understand that these checks are development-only |

---

## 📁 Module Structure

```text
01-basic-react/
│
├── src/
│   ├── App.jsx
│   ├── Chai.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

The exact structure may vary depending on the Vite project configuration.

---

## 🚀 Run the Module Locally

### Prerequisites

- Node.js and npm installed.
- Git installed if cloning the repository.

### Steps

Clone the repository:

```bash
git clone https://github.com/AnkitSingh9933/react-mastery.git
```

Navigate to this module:

```bash
cd react-mastery/01-basic-react
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

---

## ✅ Key Takeaways

- React is a JavaScript library for building user interfaces.
- JSX provides a convenient syntax for describing UI.
- Components make interfaces modular and reusable.
- `main.jsx` initializes the React root.
- `App.jsx` can compose other components such as `Chai.jsx`.
- Fragments group sibling elements without adding an extra DOM node.
- Vite transforms JSX so the browser can execute the resulting JavaScript.

---

## 🗺️ Next Module

**Module 02 — State and Events**

Upcoming topics:

- `useState` fundamentals.
- Handling user events with `onClick`.
- Understanding state snapshots.
- Functional state updates.
- React state batching.

---

*Part of my React Mastery Lab — a structured, hands-on journey through React fundamentals and modern frontend development.*