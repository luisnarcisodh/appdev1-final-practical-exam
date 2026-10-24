import React from 'react';
import styles from './Login.module.css'; 
import blossomFlower from '../assets/blossom-flower.svg'; 
import googleLogo from '../assets/icons-google-logo.svg';
import appleLogo from '../assets/icons-apple-logo.svg';
// Import the shadcn/ui Input component
import { Input } from "./ui/input";

export default function Login() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>Enter your Credentials to access your account</p>
        
        {/* Form Starts Here */}
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email address</label>
            {/* Replaced standard input with shadcn Input */}
            <Input 
              className={styles.input} 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <div className={styles.passwordHeader}>
              <label className={styles.label} htmlFor="password">Password</label>
              <a href="#" className={styles.forgotPassword}>Forgot password?</a>
            </div>
            {/* Replaced standard input with shadcn Input */}
            <Input 
              className={styles.input} 
              type="password" 
              id="password" 
              placeholder="Name" 
            />
          </div>
          
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="remember" className={styles.checkbox} />
            <label htmlFor="remember" className={styles.checkboxLabel}>
              Remember for 30 days
            </label>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Login
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
          Don’t have an account? <a href="/signup" className={styles.link}>Sign Up</a>
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