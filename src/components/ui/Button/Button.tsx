import React from 'react';

import classes from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'filled' | 'outlined';
};

function Button({ children, variant = 'filled', ...props }: ButtonProps) {
  return (
    <button className={`${classes.button} ${classes[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
