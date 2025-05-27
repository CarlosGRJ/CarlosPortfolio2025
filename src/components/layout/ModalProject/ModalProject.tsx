'use client';

import React from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';

import classes from './ModalProject.module.scss';
import { ProjectImage } from '@/types/portfolio';
import Link from 'next/link';

export type ModalProjectProps = {
  title: string;
  isInternal?: boolean;
  role: string;
  techStack: string;
  description: React.ReactNode;
  images: ProjectImage[];
  url?: string;
};

const ModalProject = ({
  title,
  isInternal = false,
  role,
  techStack,
  description,
  images,
  url,
}: ModalProjectProps) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex =
    (when: boolean) =>
    ({ index: current }: { index: number }) => {
      if (when === open) {
        setIndex(current);
      }
    };

  // const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

  const slides = images.map((image) => {
    // const matcher = asset.match(/\.(\d+)x(\d+)$/)!;
    // const width = Number.parseInt(matcher[1], 10);
    // const height = Number.parseInt(matcher[2], 10);

    return {
      src: image.src,
      alt: image.alt,
      // width: 300,
      // height: 300,
      // srcSet: breakpoints.map((breakpoint) => ({
      //   src: image.src,
      //   width: breakpoint,
      //   height: Math.round((height / width) * breakpoint),
      // })),
    };
  });

  return (
    <article className={classes['modal-project']}>
      <header className={classes['modal-project__header']}>
        <h2 className={classes['modal-project__title']}>{title}</h2>
        {isInternal && (
          <span className={classes['modal-project__tag']}>
            🔒 Internal Project
          </span>
        )}
      </header>

      <div className={classes['modal-project__meta']}>
        <p>
          <strong>Tech Stack:</strong> {techStack}
        </p>
        <p>
          <strong>Role:</strong> {role}
        </p>
      </div>

      <div className={classes['modal-project__description']}>{description}</div>

      <div className={classes['modal-project__carousel']}>
        <Lightbox
          index={index}
          slides={slides}
          plugins={[Inline]}
          on={{
            view: updateIndex(false),
            click: toggleOpen(true),
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: 'cover',
          }}
          inline={{
            style: {
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '3 / 2',
              margin: '0 auto',
            },
          }}
        />

        <Lightbox
          open={open}
          close={toggleOpen(false)}
          index={index}
          slides={slides}
          on={{ view: updateIndex(true) }}
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />
      </div>

      {url && (
        <Link
          className={classes['modal-project__link']}
          href={url}
          target='_blank'
          rel='noopener noreferrer'>
          Visit Live Site
        </Link>
      )}
    </article>
  );
};

export default ModalProject;
