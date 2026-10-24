import React from 'react';
import styles from './SignUp.module.css';
import blossomFlower from '../assets/blossom-flower.svg'; 

export default function SignUp() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
        
        {/* Form Starts Here */}
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input 
              className={styles.input} 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email address</label>
            <input 
              className={styles.input} 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input 
              className={styles.input} 
              type="password" 
              id="password" 
              placeholder="Name" 
            />
          </div>
          
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              I agree to the terms & policy
            </label>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Signup
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <img 
          src={blossomFlower} 
          alt="Botanical flowers" 
          className={styles.image} 
        />
      </div>
    </div>
  );
}