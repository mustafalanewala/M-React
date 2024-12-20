# React Advanced Notes

### 1. **Higher-Order Components (HOC)**
A Higher-Order Component is a function that takes a component as an argument and returns a new component. It is a pattern for reusing component logic.

Key Points:
- Used to share behavior between components.
- Commonly used for tasks like authentication, logging, or handling subscriptions.
- Follow naming conventions like `with` (e.g., `withAuth`, `withLogging`).

### 2. **Context API**
The Context API allows you to share state across the component tree without passing props manually at every level. It is useful for global state management, such as theme, user authentication, or language settings.

Key Points:
- Avoids "prop drilling."
- Includes `React.createContext`, `Provider`, and `Consumer`.
- Works well with `useContext` for easier consumption.

### 3. **React Portals**
Portals allow you to render children into a DOM node outside the parent component hierarchy. They are useful for modals, tooltips, or dropdowns.

Key Points:
- Use `ReactDOM.createPortal` to render components into a different DOM subtree.
- Enables better control of CSS styles and z-index.

### 4. **Error Boundaries**
Error Boundaries catch JavaScript errors in the component tree and display fallback UI. They are implemented using class components.

Key Points:
- Use `componentDidCatch` and `getDerivedStateFromError` methods.
- Useful for logging errors and preventing UI crashes.
- Cannot catch errors in event handlers or async code.

### 5. **Code Splitting**
Code splitting helps improve performance by splitting the application into smaller bundles that can be loaded on demand. React supports this through dynamic imports.

Key Points:
- Use `React.lazy` and `Suspense` for lazy loading components.
- Improves initial load time by loading only the required parts of the application.

### 6. **Custom Hooks**
Custom hooks allow you to reuse stateful logic across components. They are functions that start with the prefix `use` and can utilize other hooks internally.

Key Points:
- Encapsulate complex logic into reusable functions.
- Help maintain cleaner and more modular code.

### 7. **Redux Integration**
Redux is a state management library commonly used with React for managing global state.

Key Points:
- Centralizes application state in a single store.
- Actions describe state changes; reducers specify how state updates.
- Use libraries like `react-redux` for seamless integration.

### 8. **React Router**
React Router enables navigation and routing in React applications. It allows for dynamic rendering of components based on the URL.

Key Points:
- Supports declarative routing through `<Route>` and `<Link>` components.
- Includes hooks like `useHistory`, `useParams`, and `useLocation`.
- Nested and dynamic routes enhance flexibility.

### 9. **Server-Side Rendering (SSR)**
SSR renders React components on the server, sending the HTML to the browser instead of a JavaScript bundle. Frameworks like Next.js simplify SSR.

Key Points:
- Improves SEO and initial load time.
- Reduces the "time-to-first-byte" (TTFB).
- Requires handling data fetching and hydration.

### 10. **Static Site Generation (SSG)**
SSG generates HTML pages at build time, which are served statically. It is ideal for content-heavy websites and blogs.

Key Points:
- Supported by frameworks like Next.js.
- Pages are pre-rendered with data fetched at build time.

---

## Performance Optimization

### 1. **React.memo**
`React.memo` is a higher-order component that prevents unnecessary re-renders by memoizing the rendered output.

Key Points:
- Used for functional components.
- Compare props to decide if re-rendering is needed.
- Avoid overusing as it can introduce complexity.

### 2. **useCallback and useMemo**
- **`useCallback`**: Memoizes functions to prevent unnecessary re-creations.
- **`useMemo`**: Memoizes values to prevent unnecessary recalculations.

### 3. **Virtual DOM Diffing**
React uses a Virtual DOM to optimize updates by comparing the previous and new versions of the UI and applying the minimal changes to the real DOM.

### 4. **Lazy Loading**
Load components or assets only when needed to improve performance and reduce initial load time.

---

## Helpful Libraries and Tools
1. **Redux Toolkit**: Simplifies Redux setup and reduces boilerplate code.
2. **React Query**: Manages server state with caching and automatic refetching.
3. **Formik and Yup**: Simplifies form validation and management.
4. **Next.js**: Enhances React with built-in SSR, SSG, and API routes.
5. **Framer Motion**: Adds animations to React components.
