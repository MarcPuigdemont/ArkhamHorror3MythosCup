import React, { useCallback } from 'react';

const styleTemplate = image => ({
  token: {
    margin: '16px 20px',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  },
  name: {
    position: 'absolute',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  image: {
    marginTop: '24px',
    width: '70px',
    height: '70px',
    background: `url('static/tokens/${image}.png') center / cover`
  },
  controls: {
    display: 'flex',
    flexFlow: 'row',
    marginTop: '10px'
  },
  button: {
    height: '20px',
    minWidth: '20px',
    width: '20px',
    fontSize: '16px'
  },
  count: {
    margin: '0 5px'
  }
});

const TokenEdit = ({ token, onChange }) => {
  const style = styleTemplate(token.image);
  const count = token.count;
  const increaseCount = useCallback(() => {
    if (count < 9) {
      onChange({ ...token, count: count + 1 });
    }
  }, [count, onChange]);
  const decreaseCount = useCallback(() => {
    if (count > 0) {
      onChange({ ...token, count: count - 1 });
    }
  }, [count, onChange]);

  return (
    <div style={style.token}>
      <div style={style.name}>{token.name}</div>
      <div style={style.image} />
      <div style={style.controls}>
        <button
          onClick={decreaseCount}
          style={style.button}
          className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
        >
          -
        </button>
        <h4 style={style.count}>{count}</h4>
        <button
          onClick={increaseCount}
          style={style.button}
          className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TokenEdit;
