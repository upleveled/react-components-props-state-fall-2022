import { useState } from 'react';

function Sheet(props) {
  return (
    <section>
      <h1>{props.title}</h1>
      <hr />
      <hr />
      {props.children}

      <hr />
      <hr />
      <div>@ All rights reserver for UpLeveled</div>
    </section>
  );
}

export default function ExampleChildrenProps() {
  const [activeSheet, setActiveSheet] = useState(1);

  return (
    <>
      <hr />
      <button onClick={() => setActiveSheet(1)}>Sheet 1</button>
      <button onClick={() => setActiveSheet(2)}>Sheet 2</button>

      {activeSheet === 1 ? (
        <Sheet title="List of important items">
          <div>
            This is the content that is very important
            <ul>
              <li>One</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>five</li>
            </ul>
          </div>
        </Sheet>
      ) : (
        <Sheet title="List of expenses">
          <ol>
            <li>One</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
          </ol>
        </Sheet>
      )}
    </>
  );
}
