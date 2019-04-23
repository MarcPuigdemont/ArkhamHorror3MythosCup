import 'isomorphic-fetch';
import React from 'react';

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
  return (
    <div className="view">
      <div style={style.setting}>
        <div style={style.option}>
          Delete LocalStorage and completely reset the app
        </div>
        <div style={style.message}>Warning! This cannot be undone</div>
      </div>
    </div>
  );
};

export default Settings;
