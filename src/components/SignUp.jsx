import React from 'react';
import styles from './SignUp.module.css';
import blossomImg from "../assets/blossom-flower.svg";

const SignUp = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Left Section: Empty for now */}
      <div className={styles.leftSection}>
      </div>

      {/* Right Section: Blossom Image */}
      <div className={styles.rightSection}>
        <img 
          src={blossomImg} 
          alt="Blossom" 
          className={styles.blossomImage} 
        />
      </div>
    </div>
  );
};

export default SignUp;