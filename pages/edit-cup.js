import 'isomorphic-fetch';
import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { withRouter } from 'next/router';

import TokenEdit from '../components/TokenEdit';

const initialTokens = [
  { name: 'Spawn clue', image: 'clue', count: 0 },
  { name: 'Spread doom', image: 'doom', count: 0 },
  { name: 'Portal bursts', image: 'portal', count: 0 },
  { name: 'Spawn monster', image: 'monster', count: 0 },
  { name: 'Headline', image: 'headline', count: 0 },
  { name: 'Reckoning', image: 'reckoning', count: 0 },
  { name: 'Empty', image: 'empty', count: 0 }
];

const defaultCup = {
  scenario: '--',
  difficulty: '--'
};

const style = {
  difficulty: {
    margin: '0 auto'
  }
};

const EditCup = props => {
  const { router } = props;
  const id = router.query.id;

  const mapState = state => state.cups.find(cup => cup.id === id);
  const cup = useMappedState(mapState) || defaultCup;
  let tokens = cup.tokens || initialTokens;

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

export default withRouter(EditCup);
