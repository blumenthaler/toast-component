import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0]) 
  const [isShowingToast, setIsShowingToast] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isShowingToast && 
        <Toast
          variant={selectedVariant} 
          handleDismissToast={() => setIsShowingToast(false)}
        >
            {message}
        </Toast>
      }

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
                id="message" 
                className={styles.messageInput} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => (
                <label key={`variant-${option}`} htmlFor={`variant-${option}`}>
                    <input
                        id={`variant-${option}`}
                        type="radio"
                        name="variant"
                        value={option}
                        onChange={e => setSelectedVariant(e.target.value)}
                        checked={option === selectedVariant}
                    />
                    {option}
                </label>
             ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setIsShowingToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
