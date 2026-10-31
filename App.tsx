import { useState } from 'react'

type Page = 'home' | 'psychology' | 'chra' | 'practice' | 'about' | 'login' | 'register'

const psychologySubjects = [
  { title: 'Industrial/Organizational Psychology', desc: 'People, behavior, and organizations at work.', tag: 'I/O Psychology', lessons: 'Coming soon' },
  { title: 'Developmental Psychology', desc: 'Human growth and development across the lifespan.', tag: 'Development', lessons: 'Coming soon' },
  { title: 'Abnormal Psychology', desc: 'Psychological disorders, symptoms, and approaches to care.', tag: 'Abnormal', lessons: 'Coming soon' },
  { title: 'Psychological Assessment', desc: 'Psychological testing, measurement, and evaluation.', tag: 'Assessment', lessons: 'Coming soon' },
]
const chraSubjects = [
  { title: 'Human Resource Management', desc: 'The core functions and practices of human resource management.', tag: 'HRM' },
  { title: 'Labor Law', desc: 'Understand labor standards, relations, and employee protections.', tag: 'Labor Law' },
  { title: 'HR-Related Laws', desc: 'Review laws and regulations relevant to HR practice.', tag: 'Laws' },
  { title: 'Occupational Safety and Health', desc: 'Workplace safety, health standards, and prevention.', tag: 'OSH' },
  { title: 'Employee and Labor Relations', desc: 'Build fair, productive, and legally sound workplace relations.', tag: 'Relations' },
]

function DoodleFlower({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`doodle-flower ${className}`}><i /><i /><i /><i /><i /><b /></span>
}
function Sparkle({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`sparkle ${className}`}>✳</span>
}
function Header({ page, go }: { page: Page; go: (p: Page) => void }) {
  const links: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' }, { label: 'Psychology', page: 'psychology' },
    { label: 'CHRA', page: 'chra' }, { label: 'Practice Center', page: 'practice' }, { label: 'About', page: 'about' },
  ]
  return <header className="header">
    <button className="brand" onClick={() => go('home')} aria-label="SIKOLAYA home">
      <span className="brand-word">SIKOLAYA</span><span className="brand-dot">.</span>
      <span className="brand-sub">LEARN WITH PURPOSE</span>
    </button>
    <nav className="nav">
      {links.map(link => <button key={link.page} className={page === link.page ? 'nav-link active' : 'nav-link'} onClick={() => go(link.page)}>{link.label}</button>)}
    </nav>
    <button className="login-button" onClick={() => go('login')}>Log in <span>↗</span></button>
  </header>
}
function Footer({ go }: { go: (p: Page) => void }) {
  return <footer className="footer">
    <div><div className="footer-brand">SIKOLAYA<span>.</span></div><p>Learn with purpose. Grow with confidence.</p></div>
    <div className="footer-links"><button onClick={() => go('psychology')}>Psychology</button><button onClick={() => go('chra')}>CHRA</button><button onClick={() => go('about')}>About</button></div>
    <small>© 2026 SIKOLAYA · Made for curious minds.</small>
  </footer>
}
function Home({ go }: { go: (p: Page) => void }) {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span /> YOUR STUDY SPACE, YOUR PACE</div>
        <h1>A little progress<br /><em>goes a long way.</em></h1>
        <p className="hero-text">A thoughtful space to review, practice, and prepare for the next step in your journey.</p>
        <button className="primary-button" onClick={() => go('psychology')}>Start learning <span>→</span></button>
        <div className="hero-note"><span className="tiny-heart">♡</span> Learn. Practice. Rise.</div>
      </div>
      <div className="hero-art" aria-label="Decorative hand-drawn stationery illustration">
        <div className="art-sun" />
        <div className="art-paper"><div className="paper-tape" /><div className="paper-line wide" /><div className="paper-line" /><div className="paper-line short" /><div className="paper-stamp">YOU<br/>GOT<br/>THIS!</div></div>
        <div className="art-pencil"><span /></div>
        <div className="art-flower"><i/><i/><i/><i/><i/><b/></div>
        <span className="art-sparkle s-one">✳</span><span className="art-sparkle s-two">✧</span>
        <div className="art-caption">small steps,<br/>bright futures</div>
      </div>
      <span className="hero-loop">♡</span>
    </section>

    <section className="section">
      <div className="section-heading"><div><span className="eyebrow">PICK UP WHERE YOU ARE</span><h2>What are we studying today?</h2></div><p>Choose a review space<br/>and make it yours.</p></div>
      <div className="review-grid">
        <button className="review-card pink-card" onClick={() => go('psychology')}>
          <div className="card-top"><span className="card-kicker">LICENSURE REVIEW</span><span className="card-arrow">↗</span></div>
          <div className="card-illustration psych-illustration"><div className="head-shape"><span>✦</span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="ill-star">✧</span></div>
          <div className="card-bottom"><div><h3>Psychology Review</h3><p>Prepare for the PmLE</p></div><span className="round-arrow">→</span></div>
        </button>
        <button className="review-card green-card" onClick={() => go('chra')}>
          <div className="card-top"><span className="card-kicker">CERTIFICATION REVIEW</span><span className="card-arrow">↗</span></div>
          <div className="card-illustration chra-illustration"><div className="plant-pot"><i/><i/><i/><b/></div><span className="ill-sun">✳</span><span className="ill-dot">·</span></div>
          <div className="card-bottom"><div><h3>CHRA Review</h3><p>Build your HR knowledge</p></div><span className="round-arrow">→</span></div>
        </button>
        <button className="review-card cream-card" onClick={() => go('practice')}>
          <div className="card-top"><span className="card-kicker">TEST YOUR KNOWLEDGE</span><span className="card-arrow">↗</span></div>
          <div className="card-illustration practice-illustration"><div className="check-sheet"><span>✓</span><i/><i/><i/></div><span className="pencil-doodle">✎</span><span className="practice-star">✦</span></div>
          <div className="card-bottom"><div><h3>Practice Center</h3><p>Try questions at your pace</p></div><span className="round-arrow">→</span></div>
        </button>
      </div>
    </section>

    <section className="quote-strip"><DoodleFlower/><p>“You don't have to know it all today.<br/><em>You just have to begin.</em>”</p><span>— A little reminder from SIKOLAYA</span><Sparkle/></section>
    <section className="bottom-cta"><div><span className="eyebrow">YOUR JOURNEY STARTS HERE</span><h2>Ready when you are.</h2><p>One topic, one practice set, one step at a time.</p></div><button className="primary-button" onClick={() => go('register')}>Create an account <span>→</span></button></section>
  </>
}
function SubjectPage({ kind, go }: { kind: 'psychology' | 'chra'; go: (p: Page) => void }) {
  const isPsych = kind === 'psychology'
  const items = isPsych ? psychologySubjects : chraSubjects
  return <main className="inner-page">
    <button className="back-link" onClick={() => go('home')}>← Back to home</button>
    <div className="page-intro"><span className="eyebrow">{isPsych ? 'LICENSURE REVIEW' : 'CERTIFICATION REVIEW'}</span><h1>{isPsych ? 'Psychology Review' : 'CHRA Review'}</h1><p>{isPsych ? 'Prepare for the Psychometrician Licensure Examination (PmLE) with organized subject areas and focused practice.' : 'Strengthen your human resource knowledge with clear lessons and practical review.'}</p></div>
    <div className="subject-list">{items.map((item, index) => <article className="subject-row" key={item.title}><div className="subject-number">0{index + 1}</div><div className="subject-info"><span className="subject-tag">{item.tag}</span><h2>{item.title}</h2><p>{item.desc}</p></div><div className="subject-action"><span>{'lessons' in item ? item.lessons : 'Coming soon'}</span><button onClick={() => go('login')}>Explore lessons ↗</button></div></article>)}</div>
    <div className="notice"><span>♡</span><p>Lessons and quizzes are being prepared. Sign-in and learning progress will be enabled when the student portal is connected.</p></div>
  </main>
}
function Practice({ go }: { go: (p: Page) => void }) {
  return <main className="inner-page"><button className="back-link" onClick={() => go('home')}>← Back to home</button><div className="page-intro"><span className="eyebrow">A LITTLE PRACTICE GOES A LONG WAY</span><h1>Practice Center</h1><p>Build confidence through steady practice. Choose a review area to get started.</p></div><div className="practice-options"><button onClick={() => go('psychology')}><span className="option-number">01</span><h2>PmLE Practice</h2><p>Psychology questions and review drills.</p><b>Explore →</b></button><button onClick={() => go('chra')}><span className="option-number">02</span><h2>CHRA Practice</h2><p>HR concepts, labor law, and situational questions.</p><b>Explore →</b></button></div><div className="notice"><span>✳</span><p>Practice questions will become available after the quiz system is connected.</p></div></main>
}
function About({ go }: { go: (p: Page) => void }) {
  return <main className="inner-page about-page"><button className="back-link" onClick={() => go('home')}>← Back to home</button><span className="eyebrow">A NAME WITH A PURPOSE</span><h1>Learning that opens doors.</h1><p className="about-lead"><strong>SIKOLAYA</strong> brings together “Siko” from <em>sikolohiya</em> (psychology) and “Laya” from <em>kalayaan</em> (freedom)—a reminder that knowledge can help us move forward with confidence and independence.</p><div className="about-values"><div><span>01</span><h3>Learn</h3><p>Clear, organized review materials.</p></div><div><span>02</span><h3>Practice</h3><p>Build confidence through active recall.</p></div><div><span>03</span><h3>Rise</h3><p>Celebrate steady progress, one step at a time.</p></div></div></main>
}
function AuthPage({ mode, go }: { mode: 'login' | 'register'; go: (p: Page) => void }) {
  return <main className="auth-wrap"><div className="auth-card"><button className="back-link" onClick={() => go('home')}>← Back to home</button><span className="eyebrow">WELCOME TO YOUR STUDY SPACE</span><h1>{mode === 'login' ? 'Good to see you again.' : 'Let’s get started.'}</h1><p className="auth-desc">{mode === 'login' ? 'Sign-in will be available once student accounts are connected.' : 'Create your SIKOLAYA student account when registration is enabled.'}</p><label>Email address<input type="email" placeholder="you@example.com" disabled /></label><label>Password<input type="password" placeholder="Your password" disabled /></label>{mode === 'register' && <label>Display name<input type="text" placeholder="What should we call you?" disabled /></label>}<button className="primary-button disabled-button" disabled>{mode === 'login' ? 'Log in' : 'Create account'}</button><p className="switch-auth">{mode === 'login' ? 'New to SIKOLAYA?' : 'Already have an account?'} <button onClick={() => go(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'Register' : 'Log in'}</button></p><small>Account features are a visual preview only. Supabase authentication has not been connected yet.</small></div></main>
}
export default function App() {
  const [page, setPage] = useState<Page>('home')
  const go = (next: Page) => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return <div className="app-shell"><Header page={page} go={go}/>{page === 'home' && <Home go={go}/ >}{page === 'psychology' && <SubjectPage kind="psychology" go={go}/ >}{page === 'chra' && <SubjectPage kind="chra" go={go}/ >}{page === 'practice' && <Practice go={go}/ >}{page === 'about' && <About go={go}/ >}{(page === 'login' || page === 'register') && <AuthPage mode={page} go={go}/>}<Footer go={go}/></div>
}
