function Header(props) {
  return <div>Level Three username: {props.username}</div>;
}

function Main(props) {
  return <div>Main {props.children}</div>;
}

function Profile(props) {
  return <div>Profile {props.children}</div>;
}

export default function ChildrenProp() {
  const username = 'Antje';
  return (
    <>
      <h1>Children Prop</h1>
      <div>Top component: {username}</div>
      <Profile>
        <Main>
          <Header username={username} />
        </Main>
      </Profile>
    </>
  );
}
