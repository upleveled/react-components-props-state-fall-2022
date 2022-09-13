import { useState } from 'react';

export default function ExampleUseStateIsAsync() {
  const [heading, setHeading] = useState('This is my Heading');

  // Before the return is always JavaScript
  const key = '123knsdgv';
  // console.log('Hello1');

  return (
    <div key={key /** here you can use js */}>
      <h1>{heading}</h1>
      {
        /** here you can use js */
        // console.log('Hello2')
      }
      <button
        onClick={() => {
          console.log('before', heading);
          const newState = 'Ups... the title just changed';
          // setState function schedule a rerender of the component
          setHeading(newState);
          // here we know the state is going to be updated in the future
          console.log('after', newState);
        }}
      >
        update title
      </button>
    </div>
  );
}
