import { useState, useEffect } from 'react'
import './App.css'

const content = {
  ko: {
    aboutLabel: 'ABOUT',
    aboutTitle: 'Who I Am',
    aboutIntro: '패션과 공간, 브랜드 철학을 감각적으로 엮어내는 크리에이티브 디렉터.',
    aboutP1: 'Goldsmiths, University of London (LASALLE College of the Arts)에서 Fashion Media & Industries를 전공하며, 콘텐츠 기획과 크리에이티브 디렉션에 대한 실무 중심의 역량을 키워왔습니다.',
    aboutP2: 'Chanel, Hermès, Cartier, Van Cleef & Arpels 등 럭셔리 브랜드의 이벤트 현장을 직접 경험하며, 공간 연출과 브랜드 철학이 어떻게 하나의 감각적 서사로 완성되는지를 깊이 이해하게 되었습니다.',
    aboutP3: 'W Korea 마케팅 인턴십, 졸업 패션 필름 연출, 학과 간 협업 프로젝트를 통해 감각적 통찰과 실행력을 동시에 갖춘 인재로 성장하고 있습니다.',
    expLabel: 'EXPERIENCE',
    expTitle: 'My Journey',
    experiences: [
      {
        year: '2024',
        title: 'W Korea',
        role: 'Marketing Intern',
        desc: 'W Korea 마케팅팀에서 6개월간 인턴십을 수행하며 브랜드 협업, 행사 운영, 리서치, 제작 체크리스트 관리 등 콘텐츠 제작 전반을 지원. 행사 일정 조율과 현장 세팅을 직접 담당.',
      },
      {
        year: '2023',
        title: 'Fashion Publication Exhibit',
        role: 'Visual Director & Stylist',
        desc: '"Roots to Routes" — 패션과 문화의 연결성을 탐구한 프로젝트. 뉴욕 패션기술대학교(FIT) 박물관 팀과의 협업. 전체 비주얼 디렉션과 스타일링 총괄.',
      },
      {
        year: '2023–2024',
        title: 'Université Catholique de Lyon',
        role: 'French Language Course',
        desc: '프랑스 리옹에서의 어학연수를 통해 다양한 문화에 대한 수용력과 시각적 민감성을 발전. 글로벌 시야 확장.',
      },
      {
        year: '2018–2020',
        title: 'Fashion & Media Club',
        role: 'President · GVCS',
        desc: '디자인, 런웨이, 세트 디자인, 소셜미디어 마케팅 등으로 구성된 행사를 기획 및 운영. 콘셉트 설정부터 실무 조율, 홍보 콘텐츠 제작까지 전 과정 참여.',
      },
    ],
    skillsLabel: 'SKILLS',
    skillsTitle: 'Expertise',
    skills: [
      { category: 'Creative Tools', items: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro'] },
      { category: 'Production', items: ['Fashion Film Direction', 'Art Direction', 'Styling', 'Set Design'] },
      { category: 'Marketing', items: ['Brand Collaboration', 'Event Coordination', 'Social Media', 'Content Planning'] },
      { category: 'Languages', items: ['Korean — Native', 'English — Fluent (IELTS 6.5)', 'French — Intermediate', 'OPIc AL'] },
    ],
    portfolioLabel: 'PORTFOLIO',
    portfolioTitle: 'Selected Works',
    portfolioItems: [
      { title: 'Graduation Fashion Film', desc: '한복을 Z세대의 시선으로 재해석한 패션 필름', tag: 'Film' },
      { title: 'Chanel Haute Couture', desc: '오뜨 꾸뛰르 및 하이 주얼리 이벤트', tag: 'Event' },
      { title: 'Roots to Routes', desc: 'FIT 뮤지엄 협업 패션 전시 프로젝트', tag: 'Exhibition' },
      { title: 'W Korea Campaign', desc: '브랜드 협업 및 행사 운영', tag: 'Marketing' },
      { title: 'Editorial Direction', desc: '학과 간 협업 에디토리얼 비주얼 디렉션', tag: 'Direction' },
      { title: 'Luxury Brand Events', desc: 'Hermès · Cartier · Valentino 이벤트 기록', tag: 'Content' },
    ],
    contactLabel: 'CONTACT',
    contactTitle: 'Get in Touch',
    contactTagline: 'Let\'s create something extraordinary together.',
    contactCopied: '복사됨!',
  },
  en: {
    aboutLabel: 'ABOUT',
    aboutTitle: 'Who I Am',
    aboutIntro: 'A creative director weaving fashion, space, and brand philosophy into sensory narratives.',
    aboutP1: 'Studying Fashion Media & Industries at Goldsmiths, University of London (LASALLE College of the Arts), I have built a practice-oriented foundation in content planning and creative direction.',
    aboutP2: 'Through firsthand experience at luxury brand events by Chanel, Hermès, Cartier, and Van Cleef & Arpels, I have gained deep insight into how spatial curation and brand philosophy come together as a cohesive sensory narrative.',
    aboutP3: 'From my W Korea marketing internship to directing a graduation fashion film and leading cross-departmental projects, I continue to grow as a professional with both creative vision and execution skills.',
    expLabel: 'EXPERIENCE',
    expTitle: 'My Journey',
    experiences: [
      {
        year: '2024',
        title: 'W Korea',
        role: 'Marketing Intern',
        desc: 'Completed a 6-month internship with the Marketing Team, supporting brand collaborations, event operations, research, and production checklist management. Coordinated event schedules and on-site setup.',
      },
      {
        year: '2023',
        title: 'Fashion Publication Exhibit',
        role: 'Visual Director & Stylist',
        desc: '"Roots to Routes" — A project exploring the connection between fashion and culture, in collaboration with the Museum at FIT, New York. Led overall visual direction and styling.',
      },
      {
        year: '2023–2024',
        title: 'Université Catholique de Lyon',
        role: 'French Language Course',
        desc: 'Expanded cultural receptivity and visual sensitivity through language studies in Lyon, France. Broadened global perspective.',
      },
      {
        year: '2018–2020',
        title: 'Fashion & Media Club',
        role: 'President · GVCS',
        desc: 'Organized events covering design, runway, set design, and social media marketing. Participated in the full process from concept to execution and promotional content creation.',
      },
    ],
    skillsLabel: 'SKILLS',
    skillsTitle: 'Expertise',
    skills: [
      { category: 'Creative Tools', items: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro'] },
      { category: 'Production', items: ['Fashion Film Direction', 'Art Direction', 'Styling', 'Set Design'] },
      { category: 'Marketing', items: ['Brand Collaboration', 'Event Coordination', 'Social Media', 'Content Planning'] },
      { category: 'Languages', items: ['Korean — Native', 'English — Fluent (IELTS 6.5)', 'French — Intermediate', 'OPIc AL'] },
    ],
    portfolioLabel: 'PORTFOLIO',
    portfolioTitle: 'Selected Works',
    portfolioItems: [
      { title: 'Graduation Fashion Film', desc: 'A fashion film reinterpreting Hanbok through a Gen-Z lens', tag: 'Film' },
      { title: 'Chanel Haute Couture', desc: 'Haute Couture & High Jewelry events', tag: 'Event' },
      { title: 'Roots to Routes', desc: 'Fashion publication exhibition with FIT Museum', tag: 'Exhibition' },
      { title: 'W Korea Campaign', desc: 'Brand collaboration & event management', tag: 'Marketing' },
      { title: 'Editorial Direction', desc: 'Cross-departmental editorial visual direction', tag: 'Direction' },
      { title: 'Luxury Brand Events', desc: 'Hermès · Cartier · Valentino event documentation', tag: 'Content' },
    ],
    contactLabel: 'CONTACT',
    contactTitle: 'Get in Touch',
    contactTagline: 'Let\'s create something extraordinary together.',
    contactCopied: 'Copied!',
  },
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('ko')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const t = content[lang]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['hero', 'about', 'experience', 'skills', 'portfolio', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => scrollTo('hero')}>
          DOHYUN LEE
        </div>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {[
            ['about', 'About'],
            ['experience', 'Experience'],
            ['skills', 'Skills'],
            ['portfolio', 'Portfolio'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <li key={id}>
              <a
                className={activeSection === id ? 'active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="lang-toggle">
            <button
              className={`lang-btn ${lang === 'en' ? 'lang-active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              className={`lang-btn ${lang === 'ko' ? 'lang-active' : ''}`}
              onClick={() => setLang('ko')}
            >
              KR
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">Fashion · Events · Creative Direction</p>
          <h1 className="hero-title">DO HYUN LEE</h1>
          <div className="hero-line" />
          <p className="hero-tagline">
            Crafting sensory narratives<br />
            through fashion, space, and culture
          </p>
          <button className="hero-btn" onClick={() => scrollTo('about')}>
            Discover More
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="section-inner">
          <p className="section-label">{t.aboutLabel}</p>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="/portrait.png" alt="Do Hyun Lee" className="about-portrait" />
            </div>
            <div className="about-text">
              <p className="about-intro">{t.aboutIntro}</p>
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-label">Education</span>
                  <span className="detail-value">
                    Goldsmiths, University of London
                    <br />(LASALLE College of the Arts)
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Major</span>
                  <span className="detail-value">BA Fashion Media & Industries</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Languages</span>
                  <span className="detail-value">Korean · English · French</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section experience">
        <div className="section-inner">
          <p className="section-label">{t.expLabel}</p>
          <h2 className="section-title">{t.expTitle}</h2>
          <div className="timeline">
            {t.experiences.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills">
        <div className="section-inner">
          <p className="section-label">{t.skillsLabel}</p>
          <h2 className="section-title">{t.skillsTitle}</h2>
          <div className="skills-grid">
            {t.skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section portfolio">
        <div className="section-inner">
          <p className="section-label">{t.portfolioLabel}</p>
          <h2 className="section-title">{t.portfolioTitle}</h2>
          <div className="portfolio-grid">
            {t.portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-card">
                <div className="portfolio-image">
                  <div className="portfolio-image-inner">
                    <span>IMAGE</span>
                  </div>
                  <span className="portfolio-tag">{item.tag}</span>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="section-inner">
          <p className="section-label">{t.contactLabel}</p>
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="contact-tagline">{t.contactTagline}</p>
          <div className="contact-links">
            <button
              className={`contact-link ${copiedEmail ? 'copied' : ''}`}
              onClick={() => copyToClipboard('leedohyun651@gmail.com', 'email')}
            >
              <span className="contact-link-text">leedohyun651@gmail.com</span>
              <span className="contact-link-feedback">
                {copiedEmail ? t.contactCopied : 'Click to copy'}
              </span>
            </button>
            <button
              className={`contact-link ${copiedPhone ? 'copied' : ''}`}
              onClick={() => copyToClipboard('+82 10 4067 6746', 'phone')}
            >
              <span className="contact-link-text">+82 10 4067 6746</span>
              <span className="contact-link-feedback">
                {copiedPhone ? t.contactCopied : 'Click to copy'}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Do Hyun Lee — All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
