import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { handleAddToast } = React.useContext(ToastContext)

  const DEFAULT_VARIANT = VARIANT_OPTIONS[0]
  const [selectedVariant, setSelectedVariant] = React.useState(DEFAULT_VARIANT) 
  const [message, setMessage] = React.useState("")

  const handleSubmitForm = (e) => {
    if (e) e.preventDefault()
    handleAddToast(message, selectedVariant)
    resetForm()
  }

  const resetForm = () => {
    setMessage("")
    setSelectedVariant(DEFAULT_VARIANT)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form onSubmit={handleSubmitForm}>
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
              <Button onClick={handleSubmitForm}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
