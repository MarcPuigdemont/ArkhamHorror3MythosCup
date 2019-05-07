import 'isomorphic-fetch';
import React, { useState, useEffect, useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { withRouter } from 'next/router';
import { useDispatch } from 'redux-react-hook';

import { updateCup } from '../actions/cups';

import TokenBig from '../components/TokenBig';
import TokenPlay from '../components/TokenPlay';

const style = {
  difficulty: {
    marginTop: '0px'
  },
  revealed: {
    display: 'flex',
    flexFlow: 'row wrap',
    minHeight: '48px'
  },
  reveal: {
    textAlign: 'center',
    position: 'absolute',
    top: '254px',
    bottom: 0
  },
  tokens: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
};

const Play = props => {
  const { router } = props;
  const id = router.query.id;

  const dispatch = useDispatch();
  const mapState = state => state.cups.find(cup => cup.id === id);
  let cup = useMappedState(mapState);
  const [revealedTokens, setRevealedTokens] = useState(
    cup && cup.revealedTokens ? cup.revealedTokens : []
  );
  const [unRevealedTokens, setUnRevealedTokens] = useState(
    cup && cup.unRevealedTokens ? cup.unRevealedTokens : []
  );

  // router cannot be used directly in render as this may be called on server side rendering
  const invalidPage = !cup || !cup.tokens;
  useEffect(() => {
    if (invalidPage) {
      router.push({ pathname: '/' });
    }
  }, [cup]);
  if (invalidPage) {
    return null;
  }

  useEffect(() => {
    const tokenCount = cup.tokens.reduce((acc, t) => acc + t.count, 0);
    if (cup.playTokens && tokenCount !== cup.playTokens.length) {
      cup.playTokens = undefined;
    }
    if (!cup.playTokens) {
      cup.playTokens = cup.tokens.flatMap(token =>
        Array.from({ length: token.count }, () => ({
          name: token.name,
          image: token.image
        }))
      );
    }
    if (!unRevealedTokens.length && !revealedTokens.length) {
      setUnRevealedTokens([...cup.playTokens]);
      setRevealedTokens([]);
    }
  }, [cup]);

  const reveal = useCallback(() => {
    if (unRevealedTokens.length == 0) {
      setUnRevealedTokens([...cup.playTokens]);
      setRevealedTokens([]);
    } else {
      const randomNumber = Math.floor(Math.random() * unRevealedTokens.length);
      const token = unRevealedTokens[randomNumber];
      const newUnRevealedTokens = unRevealedTokens.filter(t => t !== token);
      const newRevealedTokens = [...revealedTokens, token];
      setUnRevealedTokens(newUnRevealedTokens);
      setRevealedTokens(newRevealedTokens);
      dispatch(
        updateCup({
          ...cup,
          unRevealedTokens: newUnRevealedTokens,
          revealedTokens: newRevealedTokens
        })
      );
    }
  }, [cup, unRevealedTokens, revealedTokens]);

  console.log('render');
  return (
    <div className="play-view">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h5>{cup.scenario}</h5>
          <h6 style={style.difficulty}>{cup.difficulty}</h6>
        </div>
        <div style={style.revealed} className="mdl-cell mdl-cell--12-col">
          {revealedTokens.map((token, i) => (
            <TokenPlay key={i} token={token} first={i == 0} revealed={true} />
          ))}
        </div>
        <div style={style.revealed} className="mdl-cell mdl-cell--12-col">
          {unRevealedTokens.map((token, i) => (
            <TokenPlay key={i} token={token} first={i == 0} revealed={false} />
          ))}
        </div>
        <div
          style={style.reveal}
          className="mdl-cell mdl-cell--12-col"
          onClick={reveal}
        >
          Reveal a Mythos token!
          {revealedTokens.length > 0 && (
            <TokenBig token={revealedTokens[revealedTokens.length - 1]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Play);
