import React from 'react';

const style = {
  token: {
    margin: '12px'
  },
  image: {
    width: '100px',
    height: '100px'
  }
};

const TokenBig = ({ token }) => {
  return (
    <div style={style.token}>
      <img src={`static/tokens/${token.image}.png`} style={style.image} />
    </div>
  );
};

export default TokenBig;
