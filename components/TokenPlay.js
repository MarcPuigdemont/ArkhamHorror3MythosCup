import React from 'react';

const styleTemplate = (first, revealed) => ({
  token: {
    margin: '4px',
    marginLeft: first ? '4px' : '-28px'
  },
  image: {
    width: '40px',
    height: '40px',
    opacity: revealed ? 1 : 0.5
  }
});

const TokenPlay = ({ token, first, revealed }) => {
  const style = styleTemplate(first, revealed);

  return (
    <div style={style.token}>
      <img src={`static/tokens/${token.image}.png`} style={style.image} />
    </div>
  );
};

export default TokenPlay;
