'use client';

import React from 'react';

import Card from '../../ui/Card/Card';
import { useTranslation } from '@/context/TranslationProvider';
import { services } from '@/constants/servicesData';

import classes from './ServicesSection.module.scss';

function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id='services' className={classes.container}>
      <h2 className='sec_title'>{t.Services.Title}</h2>

      <div className={classes.services}>
        {services.map((service, i) => (
          <Card
            key={service.id}
            icon={service.icon}
            title={t.Services.Services[i].title}
            description={t.Services.Services[i].desc}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
