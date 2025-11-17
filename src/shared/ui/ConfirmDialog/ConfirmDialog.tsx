import React, {useEffect, FC} from 'react';
import {createPortal} from 'react-dom';
import {ConfirmDialogProps} from './types';
import styles from './ConfirmDialog.module.css';

const DIALOG_ROOT_ID = 'dialog-root';

const getDialogRoot = (): HTMLElement => {
  let container = document.getElementById(DIALOG_ROOT_ID);

  if (!container) {
    container = document.createElement('div');
    container.id = DIALOG_ROOT_ID;
    document.body.appendChild(container);
  }

  return container;
};

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  title = 'Подтвердите действие',
  description = 'Вы уверены, что хотите выполнить это действие?',
  confirmText = 'Подтвердить',
  cancelText = 'Отмена',
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onCancel();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) {
    return null;
  }

  const dialogRoot = getDialogRoot();

  return createPortal(
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.cancelButton} onClick={onCancel} autoFocus>
            {cancelText}
          </button>
          <button type="button" className={styles.confirmButton} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    dialogRoot
  );
};
