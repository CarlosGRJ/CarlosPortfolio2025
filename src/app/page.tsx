import HomeSection from '@/components/sections/HomeSection/HomeSection';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection/ServicesSection';
import ExperienceSection from '@/components/sections/ExperienceSection/ExperienceSection';
import Portfolio from '@/components/sections/PortfolioSection/PortfolioSection';

import styles from './page.module.css';
import ContactSection from '@/components/sections/ContactSection/ContactSection';

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <Portfolio />
        <ContactSection />
      </main>
    </div>
  );
}
