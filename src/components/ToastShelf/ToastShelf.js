import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts = [], handleDismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => (
        <li key={`toast-${toast.id}`} className={styles.toastWrapper}>
          <Toast 
            toastId={toast.id}
            variant={toast.variant}
            handleDismissToast={handleDismissToast}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
