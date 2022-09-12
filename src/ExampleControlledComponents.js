import { useState } from 'react';

export default function ExampleControlledComponents() {
  // 1. Create state variable
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Controlled Components Example</h1>

      <label>
        What is your name?
        {/* Controlled Component */}
        <input
          // 2. Use state variable (connect it to the input)
          value={name}
          // 3. Update the state variable when the user types something
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
        />
      </label>

      <div>Your name: {name}</div>
    </div>
  );
}
