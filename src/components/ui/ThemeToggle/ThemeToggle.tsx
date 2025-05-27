'use client';

import { useTheme } from '@/context/ThemeProvider';
import React from 'react';

import classes from './ThemeToggle.module.scss';
import { ThemeEnum } from '@/types/theme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <input
        type='checkbox'
        id='darkmode-toggle'
        className={classes['darkmode-input']}
        checked={theme === ThemeEnum.DARK}
        onChange={toggleTheme}
      />
    </>
  );
}

export default ThemeToggle;
