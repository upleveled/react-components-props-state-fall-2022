/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div
      css={css`
        border: 2px solid purple;
        padding: 5px;
        margin: 0 auto;
        width: 300px;
        border-radius: 5px;
      `}
    >
      <h2>Card No. {props.number + 4}</h2>
      {props.company && <h3>Company: {props.company}</h3>}
      <section>
        <h4>{props.user.name}</h4>
        <p>{props.user.bio}</p>
        <ul>
          {props.user.activities.map((activity) => {
            return <li key={`activity-${activity}`}>activity</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

Card.propTypes = {
  number: PropTypes.number.isRequired,
  company: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    activities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default function ExamplePropTypes() {
  return (
    <>
      <h1>This is a title</h1>
      <Card
        number={1}
        company="UpLeveled"
        user={{
          name: 'Victor',
          bio: 'He is an amazing developer that learned to play Golf',
          activities: ['Fitness', 'Golf', 'Develop'],
        }}
      />
    </>
  );
}
