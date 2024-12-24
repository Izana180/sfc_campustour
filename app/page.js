"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const bottomRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sctollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth"});
  }

  return (
    <div className={styles.background}>
      {/* トップバー */}
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src="/logo.png" alt="ロゴ" width={53} height={53} />
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
          <img src="/topimage.png" alt="トップ画像" />
          <div className={styles.textOverlay}>
            <div className={styles.subtitle}>キャンパスツアー</div>
            <div className={styles.title}>
              SFC
              <br />
              たんけん
            </div>
          </div>
        </div>
        <button className={styles.exploreButton} onClick={sctollToBottom}>すぐ探検する</button>
      </div>

      {/* 1st half */}
      <div className={styles.mainSection}>
        <h1>SFCのキャンパスって<br />どんなところ？</h1>
        <p>
          SFCは自由で新しい学びが広がる場所。
          <br />
          色んな分野を組み合わせて未来を作る力を育てています。
          <br />
          学生生活の幅を広める場所は
          <br />
          いくつもあります。
        </p>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper_half}>
            <Image src="/1.png" alt="鴨池" width={200} height={150} />
            <p>
              ガリバー池(鴨池)<br />
              学生に人気の池と芝生エリア。「カモる」と呼ばれるリラックススポット。
            </p>
          </div>
          <div className={styles.imageWrapper_half}>
            <Image src="/2.png" alt="鴨池ラウンジ" width={200} height={150} />
            <p>
              鴨池ラウンジ<br />
              Σ館地下1階にある最大100人利用可能な自由スペース。            
            </p>
          </div>
        </div>
      </div>

      {/* quart */}
      <div className={styles.subSection}>
        <h2>施設はたくさん！</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper_quart}>
            <Image src="/3.png" alt="メディアセンター" width={200} height={150} />
            <p>メディアセンター</p>
          </div>
          <div className={styles.imageWrapper_quart}>
            <Image src="/4.png" alt="SBI" width={200} height={150} />
            <p>SBI</p>
          </div>
          <div className={styles.imageWrapper_quart}>
            <Image src="/5.png" alt="ジム" width={200} height={150} />
            <p>ジム</p>
          </div>
          <div className={styles.imageWrapper_quart}>
            <Image src="/6.png" alt="PCルーム" width={200} height={150} />
            <p>PCルーム</p>
          </div>
        </div>
      </div>

      {/* kamo */}
      <div className={styles.kamoSection}>
        <h2>皆さんはSFCのこと<br />どれくらい知っていますか？</h2>
        <div className={styles.kamoImages}>
          <Image src="/kamo_1.png" alt="カモ1" width={100} height={100} />
          <Image src="/kamo_2.png" alt="カモ2" width={100} height={100} />
        </div>
      </div>

      {/* 2nd half */}
      <div className={styles.finalSection}>
        <h2>SFCにいるうちに<br />こんな場所使ってみない？</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper_half}>
            <Image src="/7.png" alt="ファブキャンパス" width={200} height={150} />
            <p>
              ファブキャンパス<br />
              3Dプリンタ、レーザーカッター、デジタル刺繍ミシン等が利用可能！
            </p>
          </div>
          <div ref={bottomRef} className={styles.imageWrapper_half}>
            <Image src="/8.png" alt="スタジオ" width={200} height={150} />
            <p>
              スタジオ<br />
              撮影、録音、音響編集ができるスタジオがあり、編集・加工が可能！
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

