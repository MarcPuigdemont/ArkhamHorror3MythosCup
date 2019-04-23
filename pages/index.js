import 'isomorphic-fetch';
import React from 'react';

import CupItem from '../components/CupItem';

const cups = [
  {
    scenario: 'Feast For Umordoth',
    difficulty: 'Hard'
  },
  {
    scenario: 'Approach of Azathoth',
    difficulty: 'Easy'
  }
];

const Index = props => (
  <div className="view">
    <div className="mdl-list">
      {cups.map((cup, i) => (
        <CupItem key={i} cup={cup} />
      ))}
    </div>
  </div>
);

export default Index;
