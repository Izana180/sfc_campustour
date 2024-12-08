"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.background}>
      {/* トップバー */}
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src="/logo.png" alt="Logo" width={53} height={53} />
        </div>
        <button
          className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </header>

      {/* --- */}
      {menuOpen && (
        <nav className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}

      {/* 画像と文字 */}
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <img src="/topimage.png" alt="SFC Exploration" />
          <div className={styles.textOverlay}>
            <div className={styles.subtitle}>キャンパスツアー</div>
            <div className={styles.title}>
              SFC<br />
              たんけん
            </div>
          </div>
        </div>
        <button className={styles.exploreButton}>すぐ探検する</button>
      </div>
    </div>
  );
}

