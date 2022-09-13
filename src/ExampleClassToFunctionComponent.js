import React, { useState } from 'react';

export default function UserProfile({ user }) {
  const [detailsShown, setDetailsShown] = useState(false);

  if (!user) {
    return 'User not found!';
  }

  return (
    <>
      <img src={user.image} alt={user.imageAlt} />
      <h1>{user.name}</h1>
      <button onClick={() => setDetailsShown(!detailsShown)}>
        {detailsShown ? 'Hide' : 'Show'} Details
      </button>
      {detailsShown && <p>{user.details}</p>}
    </>
  );
}

// export class UserProfile extends React.Component {
//   state = {
//     detailsShown: false,
//   };

//   render() {
//     const { user } = this.props;

//     if (user === undefined) return 'User not found!';

//     return (
//       <>
//         <img src={user.image} alt={user.imageAlt} />
//         <h1>{user.name}</h1>
//         <button
//           onClick={() =>
//             this.setState({ detailsShown: !this.state.detailsShown })
//           }
//         >
//           {this.state.detailsShown ? 'Hide' : 'Show'} Details
//         </button>
//         {this.state.detailsShown && <p>{user.details}</p>}
//       </>
//     );
//   }
// }
