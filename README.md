# ⚛️ React Mastery Lab

A structured, code-first repository documenting my journey through core React fundamentals, internal mechanics, component design patterns, and modern state architecture.

---

## 🎯 About This Repository

This repository serves as a modular learning lab. Instead of isolated code snippets, every module contains working code, component composition patterns, and concise technical documentation explaining **why** features exist, **how** they transpile under the hood, and **what** pitfalls to avoid.

---

## 🗺️ Learning Roadmap & Curriculum

| Module | Core Topic | Key Concepts | Status |
| :--- | :--- | :--- | :--- |
| **`01-basic-react`** | Foundations & Anatomy | Vite setup, JSX transpilation, PascalCase rules, Fragments (`<>...</>`), Virtual DOM mount | Completed ✅ |
| **`02-state-and-events`** | State Management | `useState`, snapshot mental model, functional state updates, batching | Completed ✅ |
| **`03-side-effects-lifecycle`** | `useEffect` Deep Dive | Synchronization, dependency array traps, memory leak cleanup | Upcoming ⏳ |
| **`04-dom-and-references`** | `useRef` & Persistent Values | Direct DOM access, mutable state without triggering re-renders | Upcoming ⏳ |
| **`05-custom-hooks`** | Modular Logic Extraction | Decoupling business logic from JSX view layers | Upcoming ⏳ |
| **`06-react-router`** | Client-Side Routing | Dynamic routes, nested layouts with `<Outlet />`, `useParams`, `useNavigate` | Upcoming ⏳ |
| **`07-context-api`** | Global State Management | Prop drilling resolution, Context Providers, theme/auth state | Upcoming ⏳ |
| **`08-performance`** | Optimization | `useMemo`, `useCallback`, code splitting with `React.lazy` & `Suspense` | Upcoming ⏳ |

---

## 🏗️ Repository Architecture

Each module is structured independently with its own documentation and environment:

```text
react-mastery/
│
├── 01-basic-react/             # Foundations, JSX, component composition
│   ├── src/                    # Source code (App.jsx, Chai.jsx, main.jsx)
│   ├── index.html              # Root DOM mount point
│   ├── package.json            # Module dependencies
│   └── README.md               # Module-specific technical documentation
│
├── 02-state-and-events/        # (Upcoming) State management and UI interactivity
│
└── README.md                   # Main roadmap index (Current File)
```

---

## 🛠️ Tech Stack & Tooling

- **Library**: React 18+
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS / Modern CSS
- **Version Control**: Git & GitHub

---

## 🚀 Running Any Module Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/AnkitSingh9933/react-mastery.git](https://github.com/AnkitSingh9933/react-mastery.git)
   ```

2. Navigate into the specific module folder:
   ```bash
   cd 01-basic-react
   ```

3. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```