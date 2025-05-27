'use client';

import React from 'react';
import classes from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className={classes.card}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
