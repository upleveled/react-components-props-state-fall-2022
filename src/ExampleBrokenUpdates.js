export default function ExampleBrokenUpdates() {
  let count = 0;
  return (
    <div>
      <h1>Broken Updates Example (do not use)</h1>
      {count}
      <button
        onClick={() => {
          count = count + 1;
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          count = count - 1;
        }}
      >
        -
      </button>
    </div>
  );
}
