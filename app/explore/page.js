"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState({});
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelection = (quizId, option) => {
    setSelectedOption((prev) => {
        const newSelection = { ...prev, [quizId]: option };
        return newSelection;
      });
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

  const handleLogoClick = () => {
    setLogoClickCount((prev) => prev + 1);
    if (logoClickCount + 1 === 7) {
      router.push('/hint');
    }
  };

  const renderQuizSection = (id, question, imageSrc, options, correctAnswer, feedbackImage, feedbackText) => {
    const isCorrect = selectedOption[id] === correctAnswer;
    const isAnswered = selectedOption[id] !== undefined;

    return (
      <section className={styles.quizContainer} id={id}>
        <h2>{question}</h2>
        <div className={styles.quizImage}>
          <Image width={720} height={476} src={imageSrc} alt="クイズ画像" style={{ width: '80', height: 'auto' }} />
        </div>
        <div className={styles.quizOptions}>
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={id}
                value={option}
                onChange={() => handleSelection(id, option)}
                checked={selectedOption[id] === option}
              />
              {option}
            </label>
          ))}
        </div>

        {isAnswered && (
          <div className={`${styles.feedback} ${styles.show}`}>
            {isCorrect ? (
              <div className={styles.feedbackCorrect}>
                <p>正解！</p>
                <Image width={720} height={476} src={feedbackImage} alt="フィードバック画像" />
                <p dangerouslySetInnerHTML={{__html: feedbackText,}}></p>
              </div>
            ) : (
              <div className={styles.feedbackIncorrect}>不正解！</div>
            )}
          </div>
        )}
      </section>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src="/logo.png" alt="ロゴ" width={80} height={80} onClick={handleLogoClick} />
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

      <section className={styles.firstView}>
        <div className={styles.exploretitle}>
          <h2>キャンパスツアー</h2>
          <h1>SFCたんけん</h1>
          <p>
            sfcに散りばめられているクイズを
            <br />
            ルート通りに進め、リウォードをGETしよう！！
          </p>
          <Image
            className={styles.mapImage}
            width={1080}
            height={714}
            src="/SFCMap.png"
            alt="地図"
          />
        </div>
      </section>

      {renderQuizSection(
        'quiz1',
        'Q1: 隠れている部分に書かれている言葉は？',
        '/Quiz01.jpg',
        ['SFC', 'FAB', 'MCR'],
        'FAB',
        '/IMG_6151-scaled.jpg',
        '<span style="color: yellow;">FAB</span>では3Dプリンターやレーザーカッターが無料で利用でき、様々なモノ作りを体験することができます。<br />合言葉：不動'
      )}

      {renderQuizSection(
        'quiz2',
        'Q2: SFCのキャンパス内には、容器を変更することで20円引きになる食事処があります。何というお店でしょう？',
        '/ladybird.jpg',
        ['Subway', '学生食堂', 'レディバード'],
        'レディバード',
        '/ladybird.jpg',
        'レディバードでは、<span style="color: yellow;">『</span>リターナブル容器<span style="color: yellow;">』</span>に変更することでゴミ資源を削減しつつお得に食べることができます。<br />合言葉：回り道'
      )}

      {renderQuizSection(
        'quiz3',
        'Q3:鴨池前の芝生でランチを食べるためにレジャーシートを無料で借りれる場所があるのですが、どこでしょう？',
        '/Quiz01.jpg',
        ['メディアセンター', '食堂', '生協'],
        '食堂',
        '/IMG_6151-scaled.jpg',
        '食堂で無料でレジャーシートが借りられます。気分転換に鴨池前の芝生でランチをしてみましょう！<br />合言葉：サザンカ'
      )}

      {renderQuizSection(
        'quiz4',
        'Q4: 進級するために必要な単位を取れずに原級しても、4年で卒業できる制度がありますが、何というでしょう？',
        '/quiz2.jpg',
        ['フェニックス', '4年卒業制度', 'ゾンビ'],
        'フェニックス',
        '/quiz2.jpg',
        'DSや体育、研究会などによって<span style="color: yellow;">故意</span>でなく原級してしまうSFC生が多々見受けられます。このような事にならないように履修はしっかり考えましょう'
      )}

      {renderQuizSection(
        'quiz5',
        'Q5: シグマ館には学生が自由にくつろげるスペースがあります。何という場所でしょう？',
        '/kamoike.jpg',
        ['鴨池ラウンジ', 'ほっとスペース', '憩いの広場'],
        '鴨池ラウンジ',
        '/kamoike.jpg',
        'コンビニに併設している鴨池<span style="color: yellow;">ラウンジ</span>には仕切りのついたソファや大人数用の机があります。隙間時間に行ってみましょう！'
      )}

      {renderQuizSection(
        'quiz6',
        'Q6: ガンマ館にある施設はどれ？',
        '/Quiz01.jpg',
        ['メディカルセンター', 'デザインスタジオ', 'ジム'],
        'ジム',
        '/IMG_6151-scaled.jpg',
        'ガンマ館は体育館<span style="color: yellow;">アリーナ</span>だけではなく、学生が無料で利用できるジムがあります！運動したい時に行ってみましょう！'
      )}

      {renderQuizSection(
        'quiz7',
        'Q7: SFCではビデオカメラや本格カメラをレンタルすることができます。どこで借りられるでしょう？',
        '/av.jpg',
        ['サポートセンター', 'AVカウンター', 'カメラの窓口'],
        'AVカウンター',
        '/av.jpg',
        'メディアセンター内の<span style="color: yellow;">AVカウンター</span>では、SFC生であれば無料で<span style="color: yellow;">カメラ</span>をレンタルできます！学生生活の思い出や経験を記録として残してみませんか？'
      )}
    </>
  );
}
