import { useEffect, useState } from 'react';

export default function ExampleStateWithArrayOfObjects() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    setUsers(data.results);
  }

  async function addUser() {
    // 1. get the new user
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    // 2. push the new user into the array

    // get the usersArray
    // adding into the array or spread
    const newState = [data.results[0], ...users];

    // Alternative solution
    // const newState = [...users];
    // newState.unshift(data.results[0])

    // set it to the new state
    setUsers(newState);
  }

  function RemoveFirstUser() {
    // get the array
    const newState = [...users];
    newState.shift();
    // remove the first one
    // setState
    setUsers(newState);
  }

  function updateFirstUserToJohn() {
    // getting the array
    const newState = [...users];
    // assign first user name property to john
    newState[0].name.first = 'John';
    // set new State
    setUsers(newState);
  }

  // 2. A empty array as dependency = trigger on first Render only
  useEffect(() => {
    fetchUsers().catch(() => {});
  }, []);

  if (!users.length) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => addUser()}>Add new User</button>
      <button onClick={() => RemoveFirstUser()}>Delete first User</button>
      <button onClick={() => updateFirstUserToJohn()}>
        first User to John
      </button>
      {users.map((user) => {
        return (
          <div key={`user-${user.login.uuid}`}>
            <img src={user.picture.thumbnail} alt="" />
            <h2>{user.name.first}</h2>
            <p>Location: {user.location.city}</p>
          </div>
        );
      })}
    </div>
  );
}
