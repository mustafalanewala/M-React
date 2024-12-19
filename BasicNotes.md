# React Basics Notes

## Table of Contents
1. Introduction to React
2. Key Concepts
3. JSX (JavaScript XML)
4. Components
5. Props and State
6. React Lifecycle Methods
7. React Hooks
8. Event Handling
9. Conditional Rendering
10. Lists and Keys
11. Forms and Controlled Components
12. Context API
13. React Router
14. Performance Optimization
15. React Testing
16. Behind the Scenes
17. Summary and Best Practices

---

## 1. Introduction to React
- **What is React?**
  - React is a JavaScript library for building user interfaces, created by Facebook in 2013.
  - It allows developers to build reusable UI components and manage the view layer efficiently.
  - React is declarative, component-based, and handles stateful components with ease.

- **Why React?**
  - **Declarative:** Makes it easier to design interactive UIs by focusing on the "what" instead of the "how."
  - **Component-Based:** Code is divided into reusable and isolated components, improving modularity.
  - **Virtual DOM:** Provides efficient updates by minimizing direct interaction with the real DOM.
  - **Ecosystem:** Strong community support and integration with libraries like Redux, React Router, and Next.js.

- **React's Role in Modern Development**:
  - Simplifies complex UI logic.
  - Powers many single-page applications (SPAs).
  - Encourages a unidirectional data flow for better maintainability.

---

## 2. Key Concepts
- **Component-Based Architecture**:
  - The UI is split into small, manageable, and independent pieces called components.
  - Components can be reused across the application, reducing redundancy.

- **Declarative Syntax**:
  - Describes the desired UI structure and leaves React to handle updates efficiently.

- **Virtual DOM**:
  - React creates a lightweight copy of the real DOM in memory.
  - Changes are first applied to the Virtual DOM, and React calculates the minimal updates needed for the real DOM.

- **Unidirectional Data Flow**:
  - Data flows from parent to child components via props.
  - Encourages predictable and maintainable state management.

---

## 3. JSX (JavaScript XML)
- **What is JSX?**
  - JSX is a syntax extension for JavaScript that resembles HTML.
  - It allows embedding HTML within JavaScript code.

- **Key Features**:
  - Must return a single parent element.
  - Uses `className` instead of `class` for CSS classes.
  - Expressions in JSX are wrapped in curly braces `{}`.

- **Advantages of JSX**:
  - Makes the code more readable and maintainable.
  - Provides a familiar syntax for those experienced with HTML.

- **Example**:
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

---

## 4. Components
- **What are Components?**
  - Components are the building blocks of a React application.
  - Each component represents a piece of the user interface.

- **Types of Components**:
  - **Functional Components**: Simple JavaScript functions that return JSX.
  - **Class Components**: ES6 classes that extend `React.Component` and can manage state and lifecycle methods.

- **Functional Component Example**:
  ```jsx
  function Greeting() {
    return <h1>Hello, World!</h1>;
  }
  ```

- **Class Component Example**:
  ```jsx
  class Greeting extends React.Component {
    render() {
      return <h1>Hello, World!</h1>;
    }
  }
  ```

- **When to Use Functional or Class Components?**
  - Functional components are preferred for simplicity and readability.
  - Class components are used when lifecycle methods or complex state logic are needed (though Hooks now replace most of their use cases).

---

## 5. Props and State
- **Props (Properties)**:
  - Used to pass data from a parent to a child component.
  - Immutable within the child component.

- **State**:
  - Managed within a component.
  - Mutable and allows dynamic updates to the component.

- **Props Example**:
  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  <Welcome name="Alice" />
  ```

- **State Example (Class Component)**:
  ```jsx
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }
  ```

---

## 6. React Lifecycle Methods
- **Lifecycle Phases**:
  1. **Mounting**: When the component is created and inserted into the DOM.
  2. **Updating**: When the component is re-rendered due to state or props changes.
  3. **Unmounting**: When the component is removed from the DOM.

- **Key Methods**:
  - `componentDidMount()`: Called after the component is mounted.
  - `componentDidUpdate()`: Called after the component updates.
  - `componentWillUnmount()`: Called before the component is unmounted.

---

## 7. React Hooks
- **What are Hooks?**
  - Functions introduced in React 16.8 that let you use state and lifecycle features in functional components.

- **Common Hooks**:
  - `useState`: For managing state.
  - `useEffect`: For side effects like data fetching.

- **Example**:
  ```jsx
  import React, { useState, useEffect } from "react";

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`Count updated: ${count}`);
    }, [count]);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

---

## 8. Event Handling
- **Event Binding**:
  - Inline event handlers are directly attached using JSX.

- **Example**:
  ```jsx
  function Button() {
    const handleClick = () => {
      alert("Button clicked!");
    };

    return <button onClick={handleClick}>Click Me</button>;
  }
  ```

---

## 9. Conditional Rendering
- **Ternary Operator**:
  ```jsx
  {isLoggedIn ? <Dashboard /> : <Login />}
  ```
- **Logical AND (`&&`)**:
  ```jsx
  {isAdmin && <AdminPanel />}
  ```

---

## 10. Lists and Keys
- **Rendering Lists**:
  - Use `map()` to iterate over an array and render items.

- **Example**:
  ```jsx
  const items = ["Apple", "Banana", "Cherry"];

  function ItemList() {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  ```

- **Why Keys?**
  - Keys help React identify which elements have changed.
  - Improve rendering efficiency by minimizing DOM operations.

---

## 11. Forms and Controlled Components
- **Controlled Components**:
  - React controls the form element's state.

- **Example**:
  ```jsx
  function Form() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <form>
        <input value={value} onChange={handleChange} />
        <p>{value}</p>
      </form>
    );
  }
  ```

---

## 12. Context API
- **Purpose**:
  - Share state across components without prop drilling.

- **Example**:
  ```jsx
  const UserContext = React.createContext();

  function App() {
    return (
      <UserContext.Provider value="Alice">
        <UserProfile />
      </UserContext.Provider>
    );
  }

  function UserProfile() {
    const userName = useContext(UserContext);
    return <p>Welcome, {userName}!</p>;
  }
  ```

---

## 13. React Router
- **What is React Router?**
  - A library for handling routing in React applications.

- **Example**:
  ```jsx
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
  ```

---

## 14. Performance Optimization
- **Why Optimize?**
  - Improve rendering performance.
  - Enhance user experience.

- **Techniques**:
  - Use `React.memo` to prevent unnecessary re-renders.
  - Avoid anonymous functions in JSX to reduce re-creation costs.

---

## 15. React Testing
- **Why Test React Applications?**
  - Ensure components work as expected.
  - Catch bugs early in development.

- **Example with Jest and React Testing Library
