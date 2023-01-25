import React, { HTMLAttributes } from 'react';
import { Typography } from '@mui/material';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: 'primary' | 'secondary';
}

const Button = ({ label, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      style={{
        display: 'flex',
        backgroundColor: variant === 'primary' ? 'navy' : 'red',
        padding: '5px 15px',
        color: 'white',
        border: 'none',
        borderRadius: '60px',
        font: 'light',
      }}
      {...props}
    >
      <Typography variant="h1">{label}</Typography>
    </button>
  );
};

export default Button;
