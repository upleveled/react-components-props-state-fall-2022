function Profile(props) {
  console.log('props', props);
  return (
    <div>
      <div>props.user.name: {props.user.name}</div>
      <div>props.abc: {props.abc}</div>
    </div>
  );
}

export default function ExampleProps() {
  const userInfo = { id: 1, name: 'Karl' };
  return (
    <div>
      <h1>Props Example</h1>
      <Profile user={userInfo} darkMode={true} abc="def" />
    </div>
  );
}
