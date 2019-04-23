import 'isomorphic-fetch';
import React from 'react';
import TokenPlay from '../components/TokenPlay';

const tokens = [
  { name: 'Spawn clue', image: 'clue', revealed: true },
  { name: 'Spawn clue', image: 'clue', revealed: false },
  { name: 'Spread doom', image: 'doom', revealed: false },
  { name: 'Spread doom', image: 'doom', revealed: false },
  { name: 'Portal bursts', image: 'portal', revealed: false },
  { name: 'Spawn monster', image: 'monster', revealed: true },
  { name: 'Spawn monster', image: 'monster', revealed: false },
  { name: 'Headline', image: 'headline', revealed: true },
  { name: 'Headline', image: 'headline', revealed: false },
  { name: 'Reckoning', image: 'reckoning', revealed: false },
  { name: 'Empty', image: 'empty', revealed: true },
  { name: 'Empty', image: 'empty', revealed: true },
  { name: 'Empty', image: 'empty', revealed: false }
];

const cup = {
  scenario: 'Feast For Umordoth',
  difficulty: 'Hard'
};

const style = {
  difficulty: {
    marginTop: '0px'
  },
  revealed: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  reveal: {
    textAlign: 'center'
  }
};

const Play = props => {
  return (
    <div className="play-view">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h5>{cup.scenario}</h5>
          <h6 style={style.difficulty}>{cup.difficulty}</h6>
        </div>
        <div style={style.revealed} className="mdl-cell mdl-cell--12-col">
          {tokens
            .filter(token => token.revealed)
            .map((token, i) => (
              <TokenPlay
                key={i}
                token={token}
                first={i == 0}
                revealed={token.revealed}
              />
            ))}
        </div>
        <div style={style.revealed} className="mdl-cell mdl-cell--12-col">
          {tokens
            .filter(token => !token.revealed)
            .map((token, i) => (
              <TokenPlay
                key={i}
                token={token}
                first={i == 0}
                revealed={token.revealed}
              />
            ))}
        </div>
        <div style={style.reveal} className="mdl-cell mdl-cell--12-col">
          Reveal a Mythos token!
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

export default Play;
