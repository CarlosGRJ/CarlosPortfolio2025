'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import Modal from '@/components/ui/Modal/Modal';
import ModalProject from '@/components/layout/ModalProject/ModalProject';

import classes from './PortfolioSection.module.scss';
import { projects } from '@/constants/projectsData';
import { ProjectItem } from '@/types/portfolio';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <section id='portfolio' className={classes.container}>
      <h2 className='sec_title'>Portfolio</h2>

      <div className={classes.projects}>
        {projects.map((project) => (
          <article key={project.id} className={classes.projects__card}>
            <figure className={classes['projects__card-photo']}>
              <Image
                src={project.coverImg}
                alt={project.title}
                width={600}
                height={400}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                quality={85}
                priority={true}
                className={classes.image}
              />
            </figure>

            <div className={classes['projects__card-desc']}>
              <h3>{project.title}</h3>

              {/* <p>
              I worked on The Home Depot’s U.S. e-commerce platform,
              contributing to its micro-frontend React architecture. My primary
              responsibilities included implementing critical user flows for: •
              Tool, vehicle, and equipment rentals, enabling users to reserve
              large items through a step-by-step process. • Scheduled
              deliveries, allowing customers to plan delivery dates for rental
              equipment. Additionally, I was in charge of migrating legacy REST
              API integrations to GraphQL using Apollo Client to improve
              performance, reduce over-fetching, and standardize data handling
              across the application. This project required close collaboration
              with international teams and strict adherence to accessibility and
              performance standards within a large-scale enterprise React
              ecosystem.
            </p> */}

              <p>{project.summary}</p>

              <Button
                onClick={() => setSelectedProject(project)}
                aria-label={`View screenshots of ${project.title}`}>
                View Project
              </Button>
            </div>
          </article>
        ))}

        {/* <p>
              I worked on The Home Depot’s U.S. e-commerce platform,
              contributing to its micro-frontend React architecture. My primary
              responsibilities included implementing critical user flows for: •
              Tool, vehicle, and equipment rentals, enabling users to reserve
              large items through a step-by-step process. • Scheduled
              deliveries, allowing customers to plan delivery dates for rental
              equipment. Additionally, I was in charge of migrating legacy REST
              API integrations to GraphQL using Apollo Client to improve
              performance, reduce over-fetching, and standardize data handling
              across the application. This project required close collaboration
              with international teams and strict adherence to accessibility and
              performance standards within a large-scale enterprise React
              ecosystem.
            </p> */}
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}>
          <ModalProject
            title={selectedProject.title}
            role={selectedProject.role}
            techStack={selectedProject.techStack}
            description={selectedProject.description}
            images={selectedProject.images}
            url={selectedProject.url}
            isInternal={selectedProject.id !== 'THD' && !selectedProject.url}
          />
        </Modal>
      )}
    </section>
  );
}

export default Portfolio;
