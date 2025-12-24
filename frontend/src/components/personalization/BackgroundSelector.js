import React, { useState, useEffect } from 'react';
import styles from './BackgroundSelector.module.css';

const BackgroundSelector = ({ onBackgroundChange, initialBackground = '' }) => {
  const [background, setBackground] = useState(initialBackground);
  const [customBackground, setCustomBackground] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const backgroundOptions = [
    { value: 'beginner_student', label: 'Beginner Student' },
    { value: 'intermediate_learner', label: 'Intermediate Learner' },
    { value: 'advanced_practitioner', label: 'Advanced Practitioner' },
    { value: 'researcher_academic', label: 'Researcher/Academic' }
  ];

  useEffect(() => {
    if (background) {
      const valueToSend = showCustomInput ? customBackground : background;
      onBackgroundChange && onBackgroundChange(valueToSend);
    }
  }, [background, customBackground, showCustomInput]);

  const handleBackgroundChange = (e) => {
    const value = e.target.value;
    setBackground(value);
    if (value !== 'custom') {
      setShowCustomInput(false);
    } else {
      setShowCustomInput(true);
    }
  };

  const handleCustomBackgroundChange = (e) => {
    setCustomBackground(e.target.value);
  };

  return (
    <div className={styles.backgroundSelector}>
      <h3>Personalize Your Learning Experience</h3>
      <div className={styles.selectorContainer}>
        <select
          value={showCustomInput ? 'custom' : background}
          onChange={handleBackgroundChange}
          className={styles.backgroundSelect}
        >
          <option value="">Select your background</option>
          {backgroundOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          <option value="custom">Other (specify)</option>
        </select>

        {showCustomInput && (
          <input
            type="text"
            value={customBackground}
            onChange={handleCustomBackgroundChange}
            placeholder="Describe your background and experience level..."
            className={styles.customInput}
          />
        )}
      </div>
      <p className={styles.description}>
        Content will be adapted to match your experience level and background for optimal learning.
      </p>
    </div>
  );
};

export default BackgroundSelector;