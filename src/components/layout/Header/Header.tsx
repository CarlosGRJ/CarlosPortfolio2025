'use client';

import React, { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import { useTranslation } from '@/context/TranslationProvider';
import LogoBlack from '@/components/svgs/logo-black';
import LogoWhite from '@/components/svgs/LogoWhite';
import { useTheme } from '@/context/ThemeProvider';
import { ThemeEnum } from '@/types/theme';

import classes from './Header.module.scss';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header() {
  const { t, toggleLocale, locale } = useTranslation();
  const { theme } = useTheme();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${classes.header}`}>
      <nav aria-label='Main Navigation'>
        <div
          className={`${classes.container} ${isSticky ? classes.sticky : ''}`}>
          <a href='#home' className={classes.logo} aria-label='Homepage'>
            {theme === ThemeEnum.LIGHT ? <LogoBlack /> : <LogoWhite />}
          </a>

          <ul className={`${classes['nav-links']}`}>
            <li>
              <a href='#home'>{t.Header.Home}</a>
            </li>
            <li>
              <a href='#about'>{t.Header.About}</a>
            </li>
            <li>
              <a href='#services'>{t.Header.Services}</a>
            </li>
            <li>
              <a href='#experience'>{t.Header.Experience}</a>
            </li>
            <li>
              <a href='#portfolio'>{t.Header.Portfolio}</a>
            </li>
            <li>
              <a href='#contact'>{t.Header.Contact}</a>
            </li>
            
            <li>
              <ThemeToggle />
            </li>

            <li>
              <button onClick={toggleLocale} aria-label='Toggle language'>
                {locale === 'en' ? 'ES' : 'EN'}
              </button>
            </li>
          </ul>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
