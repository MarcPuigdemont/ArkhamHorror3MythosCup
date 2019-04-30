import 'isomorphic-fetch';
import React, { useCallback } from 'react';

import { useDispatch } from 'redux-react-hook';

import { removeAll } from '../actions/cups';

const style = {
  setting: {
    margin: '24px'
  },
  option: {
    fontSize: '18px'
  },
  message: {
    fontSize: '12px',
    color: 'red'
  }
};

const Settings = props => {
  const dispatch = useDispatch();
  const clearCache = useCallback(() => {
    dispatch(removeAll());
  });

  return (
    <div className="view">
      <div style={style.setting} onClick={clearCache}>
        <div style={style.option}>
          Delete LocalStorage and completely reset the app
        </div>
        <div style={style.message}>Warning! This cannot be undone</div>
      </div>
    </div>
  );
};

export default Settings;
