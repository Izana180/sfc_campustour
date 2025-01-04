"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const goToHome = () => {
      router.push('/');
    };
  
    const goToExplore = () => {
      router.push('/explore');
    };

    const goToAboutus = () => {
        router.push('/aboutus');
    };
  
    return (
        <div className={styles.aboutbackground}>
            {/* トップバー */}
            <header className={styles.header}>
                <div className={styles.logoWrapper}>
                    <Image src="/logo.png" alt="ロゴ" width={80} height={80} />
                </div>
        
                <button
                    className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
        
                <nav className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                    <ul>
                    <li onClick={goToHome}>Home</li>
                    <li onClick={goToExplore}>SFCたんけん</li>
                    <li onClick={goToAboutus}>About Us</li>
                    <li>Contact</li>
                    </ul>
                </nav>
            </header>

        <div className={styles.thirdSection}>
            <h2>SFCたんけんのいいところ</h2>
            <div className={styles.infoBox}>
            <div className={styles.numberAndHeading}>
                <p className={styles.number}>01</p>
                <h3>リアルなSFCの情報が得られる</h3>
            </div>
            <p className={styles.description}>
                実際の学生生活や学び、キャンパスライフの詳細がわかり、ＳＦＣでの生活のイメージを具体的に掴むことができます。
            </p>
            </div>
            <div className={styles.infoBox}>
            <div className={styles.numberAndHeading}>
                <p className={styles.number}>02</p>
                <h3>楽しみながら学生生活に役立つ知識を得られる</h3>
            </div>
            <p className={styles.description}>
                謎解きというゲーム形式で学ぶため、楽しみながらＳＦＣの理解を深められます。
            </p>
            </div>
            <div className={styles.infoBox}>
            <div className={styles.numberAndHeading}>
                <p className={styles.number}>03</p>
                <h3>キャンパスの魅力を再発見できる</h3>
            </div>
            <p className={styles.description}>
                探検を通して、ＳＦＣのユニークな施設や環境、歴史など、普段気付きにくい魅力を新しく発見することができます。
            </p>
            </div>
        </div>


        </div>


    )
}