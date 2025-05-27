'use client';

import React from 'react';

import classes from './ExperienceSection.module.scss';
import { useTranslation } from '@/context/TranslationProvider';

function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id='experience' className={classes.container}>
      <h2 className='sec_title'>{t.Experience.Title}</h2>

      <div className={classes.experiences}>
        {t.Experience.List.map((exp) => (
          <div className={classes.exp} key={exp.id}>
            <div>
              <span className={classes.exp__date}>{exp.date}</span>

              <h3 className={classes.exp__role}>{exp.role}</h3>

              <span className={classes.exp__company}>{exp.company}</span>
            </div>

            <ul className={classes.exp__description}>
              {exp.descriptions.map((desc) => (
                <li key={desc.id}>{desc.desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
