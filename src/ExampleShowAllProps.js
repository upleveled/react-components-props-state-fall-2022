// This is called props destructuring
function Profile({ user, bio, avatar }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <div>{avatar}</div>
      <p>{bio}</p>
      {/*
      Not all the types are rendered for react
      and objects is not supported
      */}
      {/** arrays are wrapped together */}
      <div>{[null, undefined, false, 'string', 0]}</div>
      {/** you can use JSON.stringify to render objects */}
      <div>{JSON.stringify(user)}</div>
      {/** you can use Array of JSX BUT need a key unique prop */}
      <div>
        {[
          <div key="asdas">jsx element 1</div>,
          <div key="fgh">jsx element 2</div>,
          <div key="12f">jsx element 3</div>,
        ]}
      </div>
    </div>
  );
}

// function Tweet(props) {
//   console.log('props', props);
//   return (
//     <div>
//       <div>avatar: {props.avatar}</div>
//       <div>userSlug: {props.userSlug}</div>
//       <div>content: {props.content}</div>
//     </div>
//   );
// }

export default function ExampleShowAllProps() {
  const userInfo = { id: 1, name: 'Karl' };
  return (
    <div>
      <h1>Props Example Show Different types of props</h1>
      {/* <Tweet
        avatar="lets think this is an avatar 1"
        userSlug="@jose"
        content="this is a very engaging tweet"
      />
      <br />
      <Tweet
        avatar="lets think this is an avatar 2"
        userSlug="@karl"
        content="this is a engaging tweet"
      /> */}
      <br />
      <Profile
        user={userInfo}
        darkMode={true}
        bio="lorem adasf afiacw"
        avatar={undefined}
        tags={['developer', 'advanced', 'premium']}
      />
    </div>
  );
}
