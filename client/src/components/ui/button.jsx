import React from 'react';

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
