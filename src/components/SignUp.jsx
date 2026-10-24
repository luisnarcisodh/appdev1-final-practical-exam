import React from 'react';
import styles from './SignUp.module.css';
// I-import yung image (i-adjust ang '../' depende kung gaano kalalim yung SignUp.jsx file mo)
import blossomFlower from '../assets/blossom-flower.svg'; 

export default function SignUp() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        {/* Gamitin yung na-import na variable */}
        <img 
          src={blossomFlower} 
          alt="Botanical flowers" 
          className={styles.image} 
        />
      </div>
    </div>
  );
}