import 'isomorphic-fetch';
import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';

import CupItem from '../components/CupItem';

const Index = props => {
  const mapState = state => state.cups;
  const cups = useMappedState(mapState);
  let visible = useCallback(() => cups.length > 0, [cups]);
  console.log(props);

  return (
    <div className="view" style={{ visibility: visible() ? 'auto' : 'hidden' }}>
      <div className="mdl-list">
        {cups.map(cup => (
          <CupItem key={cup.id} cup={cup} />
        ))}
      </div>
    </div>
  );
};

export default Index;
