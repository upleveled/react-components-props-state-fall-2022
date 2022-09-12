export default function ExampleStyleProp() {
  const width = 400;
  return (
    <div>
      <h1>style Prop Example</h1>
      <div
        style={{
          width: width,
          height: 350,
          border: '3px solid red',
          fontSize: 80,
        }}
      >
        this div is styled
      </div>
    </div>
  );
}
