"use client";

import { useRef } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const bottomRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sctollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth"});
  }

  const goToHome = () => {
    router.push('/');
  };

  const goToExplore = () => {
    router.push('/explore');
  };

  const goToAboutus = () => {
    router.push('/aboutus');
  };

  const goToContact = () => {
    router.push('https://docs.google.com/forms/d/e/1FAIpQLSeJJO5fPLEKyEM5DIxeH8Nojnn_P5dzH-SwyapnMmbfDZk2Eg/viewform');
  };

  const handleLogoClick = () => {
    setLogoClickCount((prev) => prev + 1);
    if (logoClickCount + 1 === 7) {
      router.push('https://web.sfc.keio.ac.jp/~t22934mw/wpx/');
    }
  };

  return (
    <div className={styles.background}>
      {/* トップバー */}
      <header className={styles.header}>
      <meta name="google-site-verification" content="l4PIkKSMhJnbBIfMKfFdz15zZnv_-x-68qL6_1Oeds4" />
        <div className={styles.logoWrapper}>
          <Image src="/logo.png" alt="ロゴ" width={80} height={80} onClick={handleLogoClick}/>
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
            <li onClick={goToContact}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* 画像と文字 */}
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image src="/topimage.png" alt="トップ画像" width={345} height={537}/>
          <div className={styles.textOverlay}>
            <div className={styles.subtitle}>キャンパスツアー</div>
            <div className={styles.title}>
              SFC
              <br />
              たんけん
            </div>
            <button className={styles.exploreButton} onClick={sctollToBottom}>すぐ探検する</button>
          </div>
        </div>  
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
        <div className={styles.imageContainer_half}>
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
        <div className={styles.imageContainer_quart}>
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
          <div className={styles.hukidashi}>
            <p>SFCって他の大学や学部とは少し違うところが多いよね</p>
          </div>
        </div>
        <div className={styles.kamoImages_2}>
          <div className={styles.hukidashi_2}>
            <p>この建物って何に使われるんだろう！</p>
          </div>
          <Image src="/kamo_2.png" alt="カモ2" width={100} height={100} />
        </div>
      </div>

      {/* 2nd half */}
      <div className={styles.secondHalfSection}>
        <h2>SFCにいるうちに<br />こんな場所使ってみない？</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper_half}>
            <Image src="/7.png" alt="ファブキャンパス" width={200} height={150} />
            <p>
              ファブキャンパス<br />
              3Dプリンタ、レーザーカッター、デジタル刺繍ミシン等が利用可能！
            </p>
          </div>
          <div className={styles.imageWrapper_half}>
            <Image src="/8.png" alt="スタジオ" width={200} height={150} />
            <p>
              スタジオ<br />
              撮影、録音、音響編集ができるスタジオがあり、編集・加工が可能！
            </p>
          </div>
        </div>
      </div>

      {/* 3rd */}
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

      {/* 4th */}
      <div className={styles.fourthSection}>
        <h2>SFCを探検してみよう</h2>
        <div className={styles.stepObject}>
          <p className={styles.step}>STEP</p>
          <p className={styles.stepNumber}>01</p>
          <div className={styles.textContent}>
            <h3>プレイスタート</h3>
            <p>1人でも友達とでも！必要なのはSFCをもっと知りたいという気持ちだけ！</p>
          </div>
        </div>
        <div className={styles.zigzagSeparator}></div>
        <div className={styles.stepObject}>
          <p className={styles.step}>STEP</p>
          <p className={styles.stepNumber}>02</p>
          <div className={styles.textContent}>
            <h3>SFCを探検する</h3>
            <p>携帯とマップを見ながらＳＦＣに隠されているクイズを解いていこう</p>
          </div>
        </div>
        <div className={styles.zigzagSeparator}></div>
        <div className={styles.stepObject}>
          <p className={styles.step}>STEP</p>
          <p className={styles.stepNumber}>03</p>
          <div className={styles.textContent}>
            <h3>謎を解く</h3>
            <p>クイズを解いていくと謎を解くヒントが出てくるよ！<br />そのヒントを使って謎を解いてみよう！</p>
          </div>
        </div>
      </div>
      {/* 5th */}
      <div ref={bottomRef} className={styles.fifthSection}>
        <h2>謎解き問題</h2>
        <Image src="/ABCDEFG.png" alt="謎解き問題" width={380} height={300} />
        <form 
          className={styles.answerForm}
          onSubmit={(e) =>{
            e.preventDefault();
            const answer = e.target.answerInput.value.trim();
            if (answer === "ふくざわゆきち") {
              window.location.href = "https://web.sfc.keio.ac.jp/~s23476yt/clear/nazoex.html";
            } else {
              alert("残念！");
            }
          }}
        >
          <input
            type="text"
            id="answerInput"
            name="answerInput"
            className={styles.answerInput}
            placeholder="答えを入力する(ひらがな)"
          />
          <button type="submit" className={styles.submitButton}>決定</button>
        </form>
        <h3>この謎を解くヒントは<br />ＳＦＣを探検して問題を解くと得られます！</h3>
        <button className={styles.routeButton} onClick={goToExplore}>SFCを探検する！</button>
      </div>
    </div>
  );
}

