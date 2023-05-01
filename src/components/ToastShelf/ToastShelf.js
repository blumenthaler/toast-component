import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => (
        <li key={`toast-${toast.id}`} className={styles.toastWrapper}>
          <Toast 
            toastId={toast.id}
            variant={toast.variant}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
