'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/context/TranslationProvider';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';

import classes from './MobileMenu.module.scss';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale, t } = useTranslation();

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className={classes.mobileWrapper}>
      <button
        className={classes.burger}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls='mobile-menu'
        onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>

      <div
        id='mobile-menu'
        className={`${classes.menu} ${open ? classes.open : ''}`}
        ref={menuRef}
        role='dialog'
        aria-modal='true'>
        <button
          onClick={toggleMenu}
          className={classes.closeBtn}
          aria-label='Close mobile menu'>
          ✕
        </button>

        <ul>
          <li>
            <a href='#home' onClick={toggleMenu}>
              {t.Header.Home}
            </a>
          </li>
          <li>
            <a href='#about' onClick={toggleMenu}>
              {t.Header.About}
            </a>
          </li>
          <li>
            <a href='#services' onClick={toggleMenu}>
              {t.Header.Services}
            </a>
          </li>
          <li>
            <a href='#experience' onClick={toggleMenu}>
              {t.Header.Experience}
            </a>
          </li>
          <li>
            <a href='#portfolio' onClick={toggleMenu}>
              {t.Header.Portfolio}
            </a>
          </li>
          <li>
            <a href='#contact' onClick={toggleMenu}>
              {t.Header.Contact}
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <button onClick={toggleLocale}>
              {locale === 'en' ? 'ES' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
