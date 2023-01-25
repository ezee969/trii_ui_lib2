import React, { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: 'primary' | 'secondary';
}

const Button = ({ label, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: variant === 'primary' ? 'navy' : 'red',
        padding: '5px 15px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        font: 'light',
      }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
