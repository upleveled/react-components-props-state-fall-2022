// import './styles.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const dotStyles = (numberOfDots) => css`
  background-color: ${numberOfDots > 3 ? 'red' : 'aquamarine'};
  border-radius: 50%;
  width: 90px;
  height: 90px;

  &:hover {
    background-color: blue;
  }
`;

function Box({ numberOfDots }) {
  const dots = Array(numberOfDots).fill(
    // <div
    //   style={{
    //     backgroundColor: 'red',
    //     borderRadius: '50%',
    //     width: '90px',
    //     height: '90px',
    //   }}
    // />,
    // <div className="dot" />,
    <div css={dotStyles(numberOfDots)} />,
  );
  // [<div>dot</div>,<div>dot</div>,<div>dot</div>,<div>dot</div>,<div>dot</div>]

  return <div>{dots}</div>;
}

function Counter({ count, setCount }) {
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

export default function ExampleLiftingStateUp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is my amazing app</h1>
      <Counter count={count} setCount={setCount} />
      <Box numberOfDots={count} />
    </div>
  );
}
