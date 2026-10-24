import React from 'react';
import styles from './SignUp.module.css';
import blossomFlower from '../assets/blossom-flower.svg'; 
import googleLogo from '../assets/icons-google-logo.svg';
import appleLogo from '../assets/icons-apple-logo.svg';
// Import the shadcn/ui Input component
import { Input } from "./ui/input";

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
            {/* Replaced standard input with shadcn Input */}
            <Input 
              className={styles.input} 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email address</label>
            <Input 
              className={styles.input} 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <Input 
              className={styles.input} 
              type="password" 
              id="password" 
              placeholder="Name" 
            />
          </div>
          
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              I agree to the <u>terms & policy</u>
            </label>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Signup
          </button>
        </form>

        {/* Divider and Bottom Section */}
        <div className={styles.divider}>
          <span>Or</span>
        </div>

        <div className={styles.socialGroup}>
          <button type="button" className={styles.socialButton}>
            <img src={googleLogo} alt="Google" className={styles.socialIcon} />
            Sign in with Google
          </button>
          <button type="button" className={styles.socialButton}>
            <img src={appleLogo} alt="Apple" className={styles.socialIcon} />
            Sign in with Apple
          </button>
        </div>

        <p className={styles.bottomText}>
          Have an account? <a href="/login" className={styles.link}>Sign In</a>
        </p>
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