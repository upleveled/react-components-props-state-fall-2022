import { useMachine } from '@xstate/react';
import { useReducer, useState } from 'react';
import { createMachine } from 'xstate';

function StatemanagementUseState() {
  const [lightbulb, setLightbulb] = useState({ status: 'on' });
  return (
    <>
      <h2>Use State</h2>
      <div>Lightbulb: {JSON.stringify(lightbulb)}</div>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'on' }
              : { status: 'broken' },
          )
        }
      >
        ON
      </button>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'off' }
              : { status: 'broken' },
          )
        }
      >
        OFF
      </button>
      <button onClick={() => setLightbulb({ status: 'broken' })}>BREAK</button>
    </>
  );
}

const initialLightbulbState = { status: 'on' };

function lightbulbReducer(lightbulb, action) {
  switch (action.type) {
    case 'turnOn': {
      if (lightbulb.status !== 'broken') {
        return { status: 'on' };
      }
      return lightbulb;
    }
    case 'turnOff': {
      if (lightbulb.status !== 'broken') {
        return { status: 'off' };
      }
      return lightbulb;
    }
    case 'break': {
      return { status: 'broken' };
    }
    default:
      throw new Error('Unkown action');
  }
}

function StateManagementUseReducer() {
  const [lightbulb, dispatch] = useReducer(
    lightbulbReducer,
    initialLightbulbState,
  );
  return (
    <>
      <h2>Use Reducer</h2>
      <div>Lightbulb: {JSON.stringify(lightbulb)}</div>
      <div>
        <button onClick={() => dispatch({ type: 'turnOn' })}>ON</button>
        <button onClick={() => dispatch({ type: 'turnOff' })}>OFF</button>
        <button onClick={() => dispatch({ type: 'break' })}>BREAK</button>
        <button onClick={() => dispatch({ type: 'error' })}>ERROR</button>
      </div>
    </>
  );
}

const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      on: {
        // No transitions when lightbulb is broken
      },
    },
  },
});

function StateManagementUseXState() {
  const [lightbulb, send] = useMachine(lightbulbMachine);
  return (
    <>
      <h2>Use XState</h2>
      <div>Lightbulb: {JSON.stringify(lightbulb.value)}</div>
      <div>
        <button onClick={() => send('TURN_ON')}>ON</button>
        <button onClick={() => send('TURN_OFF')}>OFF</button>
        <button onClick={() => send('BREAK')}>BREAK</button>
      </div>
    </>
  );
}

export default function StateManagement() {
  return (
    <>
      <h1>StateManagement</h1>
      <StatemanagementUseState />
      <StateManagementUseReducer />
      <StateManagementUseXState />
    </>
  );
}
