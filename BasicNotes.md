# React Basics Notes

## What is React?
React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components, making it easier to build and manage complex web applications. React follows a declarative approach, which means you describe what the UI should look like, and React takes care of updating it efficiently when the underlying data changes. 

React is maintained by Facebook and a community of developers. It is used for creating single-page applications (SPAs) and is known for its performance and flexibility.

---

## Core Concepts

### 1. **JSX (JavaScript XML)**
JSX is a syntax extension for JavaScript that combines the power of JavaScript with an HTML-like syntax. It makes the code more readable and helps visualize the structure of the UI. Although it looks like HTML, JSX gets compiled to JavaScript before rendering.

Key Points:
- JSX expressions must have one parent element.
- JSX can include dynamic data by embedding expressions inside curly braces (`{}`).
- Attributes in JSX use camelCase (e.g., `className` instead of `class`).

### 2. **Components**
Components are the building blocks of a React application. They allow developers to split the UI into independent, reusable pieces. Components can:
- Be stateful or stateless.
- Accept data through props.
- Be nested within other components.

#### Types of Components:
1. **Functional Components**:
   - Simple functions that return UI elements.
   - Lightweight and ideal for presentational purposes.
   - Can use hooks to manage state and lifecycle events.

2. **Class Components**:
   - More complex and can include state and lifecycle methods.
   - Require the `render()` method to return UI elements.

### 3. **Props (Properties)**
Props are used to pass data from parent to child components. They are immutable, meaning they cannot be modified by the receiving component. Props make components reusable by allowing different data to be displayed dynamically.

Key Points:
- Props can be any data type, including arrays, objects, and functions.
- Default props can be set to provide fallback values.

### 4. **State**
State is a built-in object used to manage data within a component. It allows components to store and update information dynamically. Changes in state trigger a re-render of the component, ensuring the UI stays in sync with the data.

Key Points:
- State is private and can only be managed within the component it belongs to.
- In functional components, state is managed using hooks (e.g., `useState`).
- State updates are asynchronous to ensure performance optimization.

### 5. **Lifecycle Methods**
Lifecycle methods are special functions available in class components. They allow developers to run specific code at various stages of a component’s lifecycle, such as mounting, updating, or unmounting.

Lifecycle Phases:
1. **Mounting**: When a component is created and inserted into the DOM.
   - Methods: `constructor`, `componentDidMount`
2. **Updating**: When a component updates due to changes in props or state.
   - Methods: `componentDidUpdate`
3. **Unmounting**: When a component is removed from the DOM.
   - Methods: `componentWillUnmount`

### 6. **Hooks**
Hooks allow functional components to manage state and perform side effects. They simplify the code and eliminate the need for class components in most cases.

Important Hooks:
1. **useState**: Manages state in functional components.
2. **useEffect**: Handles side effects like API calls or subscriptions.
3. **useContext**: Shares state between components without passing props manually.
4. **useReducer**: Manages complex state logic, similar to `Redux`.

Key Points:
- Hooks must be called at the top level of the component.
- They cannot be used conditionally.

### 7. **Event Handling**
React’s event handling system is similar to JavaScript but uses camelCase for naming (e.g., `onClick`, `onChange`). Events are passed as synthetic events, which are wrappers around native browser events to ensure consistency across browsers.

Key Points:
- Event handlers can accept parameters.
- Prevent default behaviors using `e.preventDefault()`.
- Bind methods in class components to ensure correct `this` context.

### 8. **Conditional Rendering**
React allows components to render different UI elements based on conditions. This can be done using:
- Ternary operators.
- Logical `&&` operators.
- Separate functions to encapsulate logic.

### 9. **Lists and Keys**
Rendering lists dynamically in React requires unique keys for each element. Keys help React identify which items have changed, added, or removed, optimizing rendering performance.
