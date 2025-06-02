'use client';

import Button from '@/components/ui/Button/Button';
import React from 'react';

import classes from './AboutSection.module.scss';
import { useTranslation } from '@/context/TranslationProvider';
import Image from 'next/image';

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id='about' className={classes.container}>
      <h2 className={`${classes.title} sec_title`}>{t.About.Title}</h2>

      <div className={classes.About}>
        <div className={classes.About__image}>
          <Image
            width={350}
            height={350}
            src='/images/AboutMe.webp'
            alt='AboutMe Coffee Coding'
          />
        </div>
        <div className={classes.About__content}>
          <p className={classes['About__content-text']}>
            {t.About.Description}
          </p>

          <div className={classes['About__content-buttons']}>
            <Button>View Works</Button>

            <Button variant='outlined'>Download CV</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
