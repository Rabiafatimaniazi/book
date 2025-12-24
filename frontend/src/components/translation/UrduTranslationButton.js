import React, { useState, useEffect } from 'react';
import styles from './UrduTranslationButton.module.css';

const UrduTranslationButton = ({ content, onTranslationComplete }) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedContent, setTranslatedContent] = useState(null);
  const [error, setError] = useState(null);

  const translateToUrdu = async () => {
    setIsTranslating(true);
    setError(null);

    try {
      // Call the backend translation API
      const response = await fetch('http://localhost:8000/translation/urdu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,
          preserve_formatting: true
        }),
      });

      if (!response.ok) {
        throw new Error(`Translation request failed with status ${response.status}`);
      }

      const data = await response.json();
      const urduContent = data.translated_content;

      setTranslatedContent(urduContent);
      onTranslationComplete && onTranslationComplete(urduContent);
    } catch (err) {
      console.error('Translation error:', err);
      setError(err.message);
    } finally {
      setIsTranslating(false);
    }
  };

  const resetTranslation = () => {
    setTranslatedContent(null);
    setError(null);
  };

  if (translatedContent) {
    return (
      <div className={styles.translationContainer}>
        <div className={styles.buttonRow}>
          <button
            className={styles.resetButton}
            onClick={resetTranslation}
            title="Show original content"
          >
            ← Original
          </button>
        </div>
        <div className={styles.translatedContent}>
          <div className={styles.contentText} dir="rtl">
            {translatedContent}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.translationContainer}>
      <button
        className={`${styles.translateButton} ${isTranslating ? styles.loading : ''}`}
        onClick={translateToUrdu}
        disabled={isTranslating}
        title="Translate to Urdu"
      >
        {isTranslating ? 'Translating...' : '.Translate to Urdu'}
      </button>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default UrduTranslationButton;