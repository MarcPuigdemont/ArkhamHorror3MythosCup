import 'isomorphic-fetch';
import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';

import NoSSR from 'react-no-ssr';

import CupItem from '../components/CupItem';

const Index = () => {
  const mapState = state => state.cups;
  let cups = useMappedState(mapState) || [];
  const style = {
    view: {
      visibility: cups.length > 0 ? 'initial' : 'hidden'
    }
  };
  return (
    <NoSSR onSSR={<div />}>
      <div className="view" style={style.view}>
        <div className="mdl-list">
          {cups.map(cup => (
            <CupItem key={cup.id} cup={cup} />
          ))}
        </div>
      </div>
    </NoSSR>
  );
};

export default Index;
