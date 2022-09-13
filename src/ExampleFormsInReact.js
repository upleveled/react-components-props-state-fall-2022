import { useState } from 'react';

/** this is a controlled component */
export default function ExampleFormsInReact() {
  const [nameInput, setNameInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      {/**
       * If you decide to use form you need to prevent the default,
       * alternative is dont use form at all
       * */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/** ternary operator */}
        {isSubmitted ? (
          <p>ternary: the form is submitted successfully</p>
        ) : (
          false
        )}
        {/** boolean operator */}
        {isSubmitted && <p>boolean: the form is submitted successfully</p>}
        {/** this is a controlled input */}
        <input
          value={nameInput}
          onChange={(event) => {
            setNameInput(event.currentTarget.value);
          }}
        />

        <button
          onClick={() => {
            console.log(
              `fetching to an API with value of ${JSON.stringify({
                body: { name: nameInput },
              })}`,
            );
            setNameInput('');
            setIsSubmitted(true);
          }}
        >
          submit
        </button>
      </form>
    </>
  );
}
