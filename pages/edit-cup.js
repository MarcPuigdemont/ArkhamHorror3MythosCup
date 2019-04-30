import 'isomorphic-fetch';
import React, { useCallback, useEffect } from 'react';
import { useMappedState } from 'redux-react-hook';
import { withRouter } from 'next/router';
import { useDispatch } from 'redux-react-hook';

import { updateCup } from '../actions/cups';

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

const style = {
  difficulty: {
    margin: '0 auto'
  },
  tokens: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  }
};

const EditCup = props => {
  const { router } = props;
  const id = router.query.id;

  const dispatch = useDispatch();
  const mapState = state => state.cups.find(cup => cup.id === id);
  let cup = useMappedState(mapState);
  // router cannot be used directly in render as this may be called on server side rendering
  useEffect(() => {
    if (!cup) {
      router.push({ pathname: '/' });
    }
  }, [cup]);
  if (!cup) {
    return null;
  }
  if (cup && !cup.tokens) {
    dispatch(
      updateCup({
        ...cup,
        tokens: initialTokens
      })
    );
  }

  let tokens = cup.tokens || initialTokens;
  const onChange = useCallback(
    token => {
      if (!cup.id) return;

      dispatch(
        updateCup({
          ...cup,
          tokens: tokens.map(t => (t.name === token.name ? token : t))
        })
      );
    },
    [cup, dispatch]
  );

  return (
    <div className="view">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h5>{cup.scenario}</h5>
          <h6 style={style.difficulty}>{cup.difficulty}</h6>
        </div>
        <div style={style.tokens}>
          {tokens.map((token, i) => (
            <TokenEdit key={i} token={token} onChange={onChange} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditCup);
