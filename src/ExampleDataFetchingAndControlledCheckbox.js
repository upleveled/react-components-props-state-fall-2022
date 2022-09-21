import { useEffect, useState } from 'react';

export default function ExampleDataFetchingAndControlledCheckbox() {
  const [user, setUser] = useState('');
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // using non pure function
  // function sendData() {
  //   console.log(
  //     `sending ${user.name.first} is${checkBoxValue ? '' : ' not'} available`,
  //   );
  // }

  // using pure function
  function sendData(username, isAvailable) {
    console.log(`sending ${username} is${isAvailable ? '' : ' not'} available`);
  }

  async function fetchUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    setUser(data.results[0]);
  }
  // 1. No dependencies = trigger on every Render and Rerender
  useEffect(() => {
    console.log("this trigger on every render you don't need this very often");
  });

  // 2. A empty array as dependency = trigger on first Render only
  useEffect(() => {
    fetchUser().catch(() => {});
  }, []);

  // 3. A array of variables = trigger every time the dependency is updated
  // Trigger this code at first render and every time user is updated
  useEffect(() => {
    if (user) {
      document.title = `user profile : ${user.name.first}`;
    }
  }, [user]);

  if (!user) return <div>is Loading...</div>;

  return (
    <>
      {user && user.name.first}
      <input
        checked={checkBoxValue}
        type="checkbox"
        onChange={(event) => setCheckBoxValue(event.currentTarget.checked)}
      />
      <button
        // Send the user data to an API
        onClick={() => {
          sendData(user.name.first, checkBoxValue); // using Pure Function
          // sendData();  // using non pure Function
        }}
      >
        Send Data
      </button>
      <button
        // Send the user data to an API
        onClick={async () => {
          await fetchUser();
        }}
      >
        Get New User
      </button>
    </>
  );
}
