# ☕ 01-Basic-React: Anatomy of a React App

In this module, we explored the core architecture, component tree, JSX syntax, and rendering flow of a React application.

---

## 🧠 Core Concepts Learned

### 1. What is JSX? (JavaScript XML)
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript files.

- **How it Works**: Browsers do not understand JSX directly. Build tools like Vite (via Babel/esbuild) transpile JSX into pure JavaScript `React.createElement()` function calls before execution.
- **Example**:
  ```jsx
  // What we write in JSX:
  const element = <h1>Hello World</h1>;

  // What the browser actually runs:
  const element = React.createElement('h1', null, 'Hello World');
  ```
- **Key Rules of JSX**:
  - Must return a single root element or Fragment.
  - Every tag must be properly closed (e.g., `<img />`, `<input />`).
  - Uses camelCase for HTML attributes (e.g., `class` becomes `className`, `onclick` becomes `onClick`).

---

### 2. The Entry Point (`main.jsx`)
React does not talk directly to the browser DOM. There is a single placeholder in Vite's `index.html`: `<div id="root"></div>`.

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
```

- **`createRoot`**: A React 18+ method that creates a root from a DOM node so that React can manage the Virtual DOM.
- **`<StrictMode>`**: React's development-only checker that mounts and unmounts components to detect rendering bugs and unsafe side effects.

---

### 3. Custom Component Rules (`Chai.jsx`)

```jsx
const Chai = () => {
  return <h2>This is h2 From Chai function to App.jsx</h2>;
};

export default Chai;
```

- **PascalCase Naming**: The component function name must always start with a capital letter (`Chai`, not `chai`). React treats lowercase tags as default HTML elements (`div`, `h1`).
- **Single Return**: A component always returns a single JSX structure.

---

### 4. Component Composition & React Fragments (`App.jsx`)

```jsx
import Chai from "./Chai";

function App() {
  return (
    <>
      <h1>This is h1 from current App function</h1>
      <Chai/>
    </>
  );
}

export default App;
```

- **Why Fragments (`<>...</>`)?**: Under the hood, JSX turns into `React.createElement()` calls. When there are multiple sibling elements, the compiler gets confused, so they require a single wrapper. Using a Fragment wraps elements without adding unnecessary `<div>` tags to the real DOM.
- **Component Nesting**: The `Chai` component is invoked as a child inside `App` (`<Chai />`).

---

## 🔄 Execution Flow

```text
index.html (<div id="root">)
       ▲
   main.jsx (createRoot mounts App)
       ▲
    App.jsx (<StrictMode> + Root layout)
       ▲
    Chai.jsx (Child custom component)
```

---

## ⚠️ Common Pitfalls Avoided

- **Missing Capitalization**: If you write `<chai />`, the browser will treat it as an unknown HTML tag and will not render it.
- **Missing Root Wrapper**: Returning two sibling tags without `<> ... </>` results in a syntax error: *Adjacent JSX elements must be wrapped in an enclosing tag*.
- **Writing JS Statements directly inside JSX**: Statements like `if-else` cannot be directly placed inside curly braces `{}`; only JavaScript expressions (e.g., ternary operator `? :`) are allowed.