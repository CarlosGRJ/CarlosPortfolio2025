'use client';

import React, { useEffect } from 'react';
import classes from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'>
        {title && <h2 id='modal-title'>{title}</h2>}
        <button
          className={classes.close}
          onClick={onClose}
          aria-label='Close modal'>
          ×
        </button>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
}
