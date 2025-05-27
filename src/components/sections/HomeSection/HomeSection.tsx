'use client';

import React from 'react';

import classes from './HomeSection.module.scss';
import Image from 'next/image';
import { useTranslation } from '@/context/TranslationProvider';
import Button from '@/components/ui/Button/Button';

function HomeSection() {
  const { t } = useTranslation();

  const hireMe = () => {
    alert('Hire me button clicked');
  };

  return (
    <section id='home' className={classes.container}>
      <div className={classes.left}>
        <div className={classes['left-texts']}>
          <h1>{t.Home.Title}</h1>

          <h2>{t.Home.Subtitle}</h2>
        </div>

        <Button onClick={hireMe}>{t.Home.Hire}</Button>
      </div>

      <div className={classes.right}>
        <Image
          priority
          quality={100}
          unoptimized
          src='/images/carlos-avatar.webp'
          width={200}
          height={200}
          alt='Carlos Rojas'
        />
      </div>
    </section>
  );
}

export default HomeSection;
