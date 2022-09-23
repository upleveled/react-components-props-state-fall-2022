function Header(props) {
  return <div>Level Three username: {props.username}</div>;
}

function Main(props) {
  return <Header username={props.username} />;
}

function Profile(props) {
  return <Main username={props.username} />;
}

export default function PropsDrilling() {
  const username = 'Antje';
  return (
    <>
      <h1>Props Drilling</h1>
      <div> top comment username: {username}</div>
      <Profile username={username} />
    </>
  );
}
