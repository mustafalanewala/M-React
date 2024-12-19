# React Advance Notes

## Table of Contents
1. Higher-Order Components (HOCs)
2. Render Props
3. Portals
4. Error Boundaries
5. React Refs
6. React Suspense and Lazy Loading
7. Context API with Advanced Use Cases
8. State Management with Redux
9. Server-Side Rendering (SSR) with Next.js
10. Static Site Generation (SSG)
11. Code Splitting and Dynamic Import
12. React Performance Optimization Techniques
13. Testing React Applications
14. Integrating React with TypeScript
15. Advanced Hooks
16. Custom Hooks
17. Animations in React
18. Summary and Best Practices

---

## 1. Higher-Order Components (HOCs)
- **What are HOCs?**
  - A function that takes a component and returns a new component.
  - Used for reusing component logic.

- **Example**:
  ```jsx
  function withLogging(WrappedComponent) {
    return function LoggingComponent(props) {
      console.log("Props:", props);
      return <WrappedComponent {...props} />;
    };
  }

  const EnhancedComponent = withLogging(MyComponent);
  ```

- **Use Cases**:
  - Adding logging or analytics.
  - Conditional rendering.

---

## 2. Render Props
- **What is Render Props?**
  - A technique for sharing code between components using a prop whose value is a function.

- **Example**:
  ```jsx
  function DataFetcher({ render }) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("/api/data")
        .then((response) => response.json())
        .then(setData);
    }, []);

    return render(data);
  }

  function App() {
    return (
      <DataFetcher render={(data) => (data ? <div>{data.name}</div> : <p>Loading...</p>)} />
    );
  }
  ```

- **Advantages**:
  - Makes components more flexible and reusable.

---

## 3. Portals
- **What are Portals?**
  - Used to render children into a DOM node outside the parent component hierarchy.

- **Example**:
  ```jsx
  import ReactDOM from "react-dom";

  function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="modal">{children}</div>,
      document.getElementById("modal-root")
    );
  }
  ```

- **Use Cases**:
  - Modals, tooltips, and popups.

---

## 4. Error Boundaries
- **What are Error Boundaries?**
  - Components that catch JavaScript errors in their child component tree and display a fallback UI.

- **Example**:
  ```jsx
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.error(error, info);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }
  ```

---

## 5. React Refs
- **What are Refs?**
  - Provide a way to access DOM nodes or React elements directly.

- **Example**:
  ```jsx
  function TextInputWithFocusButton() {
    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus();
    };

    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }
  ```

---

## 6. React Suspense and Lazy Loading
- **Suspense**:
  - Allows you to handle loading states declaratively.

- **Lazy Loading Components**:
  ```jsx
  const LazyComponent = React.lazy(() => import("./LazyComponent"));

  function App() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    );
  }
  ```

---

## 7. Context API with Advanced Use Cases
- **Dynamic Themes**:
  ```jsx
  const ThemeContext = React.createContext();

  function App() {
    const [theme, setTheme] = useState("light");

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  function Toolbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    );
  }
  ```

---

## 8. State Management with Redux
- **Core Concepts**:
  - **Store**: Holds the application state.
  - **Actions**: Describe changes.
  - **Reducers**: Pure functions that update state.

- **Example**:
  ```jsx
  import { createStore } from "redux";

  function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      default:
        return state;
    }
  }

  const store = createStore(counterReducer);

  store.dispatch({ type: "INCREMENT" });
  console.log(store.getState());
  ```

---

## 9. Server-Side Rendering (SSR) with Next.js
- **What is SSR?**
  - Renders React components on the server and sends HTML to the client.

- **Benefits**:
  - Improves SEO.
  - Faster initial page loads.

- **Example**:
  ```jsx
  export async function getServerSideProps() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();

    return { props: { data } };
  }

  function Page({ data }) {
    return <div>{data.title}</div>;
  }

  export default Page;
  ```

---

## 10. Static Site Generation (SSG)
- **Example**:
  ```jsx
  export async function getStaticProps() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();

    return { props: { data } };
  }

  function Page({ data }) {
    return <div>{data.title}</div>;
  }

  export default Page;
  ```

---

## 11. Code Splitting and Dynamic Import
- **Dynamic Import**:
  ```jsx
  const OtherComponent = React.lazy(() => import("./OtherComponent"));
  ```

---

## 12. React Performance Optimization Techniques
- **Tips**:
  - Use `React.memo`.
  - Avoid inline functions in render.
  - Use `useCallback` and `useMemo`.
  - Optimize large lists with `react-window` or `react-virtualized`.

---

## 13. Testing React Applications
- **Tools**:
  - Jest
  - React Testing Library

- **Example**:
  ```jsx
  test("renders a message", () => {
    render(<App />);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
  ```

---

## 14. Integrating React with TypeScript
- **Advantages**:
  - Improved type safety.
  - Better tooling and error checking.

- **Example**:
  ```tsx
  type Props = {
    name: string;
  };

  function Greeting({ name }: Props) {
    return <h1>Hello, {name}!</h1>;
  }
  ```

---

## 15. Advanced Hooks
- **`useReducer`**:
  - Alternative to `useState` for complex state logic.

- **Example**:
  ```jsx
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      default:
        return state;
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      </div>
    );
  }
  ```

---

## 16. Custom Hooks
- **What are Custom Hooks?**
  - Reusable logic extracted into a function.

- **Example**:
  ```jsx
  function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then(setData);
    }, [url]);

    return data;
  }
  ```

---

## 17. Animations in React
- **Tools**:
  - `react-spring`
  - `framer-motion`

- **Example with `framer-motion`**:
  ```jsx
  import { motion } from "framer-motion";

  function Box() {
    return <motion.div animate={{ x: 100 }} />;
  }
  ```

---

## 18. Summary and Best Practices
- Write clean and readable code.
- Use functional components with Hooks.
- Optimize rendering with `React.memo` and `useMemo`.
- Test your components thoroughly.
- Follow a consistent folder structure.

