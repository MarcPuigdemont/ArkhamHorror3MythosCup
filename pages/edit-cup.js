import 'isomorphic-fetch';
import React from 'react';

import TokenEdit from '../components/TokenEdit';

const tokens = [
  { name: 'Spawn clue', image: 'clue' },
  { name: 'Spread doom', image: 'doom' },
  { name: 'Portal bursts', image: 'portal' },
  { name: 'Spawn monster', image: 'monster' },
  { name: 'Headline', image: 'headline' },
  { name: 'Reckoning', image: 'reckoning' },
  { name: 'Empty', image: 'empty' }
];

const cup = {
  scenario: 'Feast For Umordoth',
  difficulty: 'Hard'
};

const style = {
  difficulty: {
    marginTop: '0px'
  }
};

const EditCup = props => {
  return (
    <div className="view">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h5>{cup.scenario}</h5>
          <h6 style={style.difficulty}>{cup.difficulty}</h6>
        </div>
        <div className="tokens">
          {tokens.map((token, i) => (
            <TokenEdit key={i} token={token} />
          ))}
        </div>
        <style>
          {`
            .tokens {
              display: flex;
              flex-flow: row wrap;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default EditCup;
