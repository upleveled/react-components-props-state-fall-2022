import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    // This is a fragment - it will not show up in the HTML
    //
    // We use a fragment here because React requires a
    // single element to be returned from a component
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(100)}>100</button>
    </>
  );
}

export default function ExampleState() {
  return (
    <div>
      <h1>State Example</h1>
      <Counter />
    </div>
  );
}
