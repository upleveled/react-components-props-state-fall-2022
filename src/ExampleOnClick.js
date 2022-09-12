export default function ExampleOnClick() {
  return (
    <div>
      <h1>onClick Example</h1>
      <button
        onClick={() => {
          alert('You clicked me!');
        }}
      >
        Click me
      </button>
    </div>
  );
}
