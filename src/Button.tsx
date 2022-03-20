import React, { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secundary';
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        background: variant === 'primary' ? '#C4C4C4' : '#E6C9DD',
        padding: 10,
        border: 'none',
        borderRadius: 50,
      }}
    >
      {children}
    </button>
  );
};
