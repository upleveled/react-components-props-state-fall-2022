import { useEffect, useState } from 'react';

// count 1 > 0 & count 2 > 0 --> count1, count2
// count 1 > 0 & count 2 < 0 --> count1
// count 1 < 0 & count 2 > 0 --> count2
// count 1 < 0 & count 2 < 0 -->

function calculatePositiveValues(count1, count2) {
  if (count1 >= 0 && count2 >= 0) {
    return [count1, count2];
  } else if (count1 >= 0 && count2 < 0) {
    return [count1];
  } else if (count1 < 0 && count2 >= 0) {
    return [count2];
  } else if (count1 < 0 && count2 < 0) {
    return [];
  }
}

export default function DerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // const [positiveValues, setPositiveValues] = useState([]);

  // useEffect(() => {
  //   if (count1 >= 0 && count2 >= 0) {
  //     setPositiveValues([count1, count2]);
  //   } else if (count1 >= 0 && count2 < 0) {
  //     setPositiveValues([count1]);
  //   } else if (count1 < 0 && count2 >= 0) {
  //     setPositiveValues([count2]);
  //   } else if (count1 < 0 && count2 < 0) {
  //     setPositiveValues([]);
  //   }
  // }, [count1, count2]);

  // const positiveValues = calculatePositiveValues(count1, count2);

  return (
    <div>
      <h1>Deriving State</h1>
      <div>Count 1: {count1}</div>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>
      <div>Count 2: {count2}</div>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
      <div>
        Positive Values: {calculatePositiveValues(count1, count2).join(', ')}
      </div>
    </div>
  );
}
