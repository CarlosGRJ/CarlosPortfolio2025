import { ProjectItem } from '@/types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: 'THD',
    title: 'The Home Depot – E-commerce Platform',
    summary:
      'I contributed to The Home Depot’s U.S. e-commerce platform, building key rental and delivery flows within a large-scale React architecture.',
    description: (
      <>
        <p>
          I worked on The Home Depot’s U.S. e-commerce platform, contributing to
          its micro-frontend React architecture. My responsibilities included:
        </p>
        <ul>
          <li>🔧 Tool, vehicle, and equipment rentals (step-by-step flow)</li>
          <li>🚚 Scheduled equipment deliveries</li>
          <li>🔁 Migration of REST to GraphQL with Apollo Client</li>
        </ul>
        <p>
          This required close collaboration with international teams and strict
          adherence to accessibility and performance standards.
        </p>
      </>
    ),
    coverImg: '/images/projects/THD/THD_home.webp',
    images: [
      {
        src: '/images/projects/THD/THD_home.webp',
        alt: 'LE rental Page',
      },
      {
        src: '/images/projects/THD/THD_LE_Rental.webp',
        alt: 'LE rental Page',
      },
      {
        src: '/images/projects/THD/THD_LE_Rental_grid.webp',
        alt: 'Rental LE Grid',
      },
      {
        src: '/images/projects/THD/THD_LE_Check_Availability_Grid.webp',
        alt: 'Rental LE Grid',
      },
      {
        src: '/images/projects/THD/THD_Product_info.webp',
        alt: 'Product Info Page',
      },
      {
        src: '/images/projects/THD/THD_Reserv_Summary.webp',
        alt: 'Reservation Sumary',
      },
      {
        src: '/images/projects/THD/THD_Check_Availavility.webp',
        alt: 'Check availability',
      },
      {
        src: '/images/projects/THD/THD_Checkout.webp',
        alt: 'Checkout',
      },
      {
        src: '/images/projects/THD/THD_T&C.webp',
        alt: 'Checkout',
      },
    ],
    role: 'Frontend Developer',
    techStack: 'React, GraphQL, Apollo, SCSS',
    url: 'https://www.homedepot.com/',
  },
  {
    id: 'bc-simulator',
    title: 'Banco Caminos - Simulator',
    summary:
      'I contributed to Banco caminos’s U.S. e-commerce platform, building key rental and delivery flows within a large-scale React architecture.',
    description: (
      <>
        <p>
          I worked on Baco caminos U.S. e-commerce platform, contributing to
          its micro-frontend React architecture. My responsibilities included:
        </p>
        <ul>
          <li>🔧 Tool, vehicle,s and equipment rentals (step-by-step flow)</li>
          <li>🚚 Scheduled equipment deliveries</li>
          <li>🔁 Migration osf REST to GraphQL with Apollo Client</li>
        </ul>
        <p>
          This required closse collaboration with international teams and strict
          adherence to accesssibility and performance standards.
        </p>
      </>
    ),
    coverImg: '/images/projects/Banco_Caminos/Simulator/step1.webp',
    images: [
      {
        src: '/images/projects/Banco_Caminos/Simulator/step1.webp',
        alt: 'BC step1',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step2.webp',
        alt: 'BC step2',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step3.webp',
        alt: 'BC step3',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step4_1.webp',
        alt: 'BC step4_1',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step4_2.webp',
        alt: 'BC step4_2',
      },
      {
        src: '/images/projects/Banco_Caminos/Simulator/step4_3.webp',
        alt: 'BC step4_3',
      },
    ],
    role: 'Frontend Developer',
    techStack: 'React, GraphQL, Apollo, SCSS',
    url: 'https://www.homedepot.com/',
  },
  {
    id: 'bc-explorer',
    title: 'Banco Caminos - Explorer',
    summary:
      'I contributed to Tacscsacot’s U.S. e-commerce platform, building key rental and delivery flows within a large-scale React architecture.',
    description: (
      <>
        <p>
          I worked on The Home Depot’s U.S. e-commerce platform, contribucacting to
          its micro-frontend React architecture. My responsibilities included:
        </p>
        <ul>
          <li>🔧 Tool, vcacehicle, and equipment rentals (step-by-step flow)</li>
          <li>🚚 Schedulacced equipment deliveries</li>
          <li>🔁 Migratiacon of REST to GraphQL with Apollo Client</li>
        </ul>
        <p>
          This required clacose collaboration with international teams and strict
          adherence to acacaccessibility and performance standards.
        </p>
      </>
    ),
    coverImg: '/images/projects/Banco_Caminos/Explorer/explorer1.webp',
    images: [
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer1.webp',
        alt: 'BC step1',
      },
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer2.webp',
        alt: 'BC step1',
      },
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer_mobile1.webp',
        alt: 'BC step2',
      },
      {
        src: '/images/projects/Banco_Caminos/Explorer/explorer_mobile2.webp',
        alt: 'BC step3',
      },
    ],
    role: 'Frontend Developer',
    techStack: 'React, GraphQL, Apollo, SCSS',
    url: 'https://www.homedepot.com/',
  },
];
