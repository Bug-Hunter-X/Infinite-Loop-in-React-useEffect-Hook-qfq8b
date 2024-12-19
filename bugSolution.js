```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Set count only once after initial render, outside of the effect
    // Or use a conditional update to set count only on particular conditions
  }, []);
  // Or use a conditional update to set count only on particular conditions

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```