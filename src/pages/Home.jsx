import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiC } from 'react-icons/si';
import '../styles/HomeStyles.css';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { useTranslation } from 'react-i18next';
import projectsData from '../data/projectsData';

const Home = () => {
  const { t } = useTranslation('common');
  const auctionProject = projectsData.find(p => p.id === 2);
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Select all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Typewriter effect for hero name and subtitle
  useEffect(() => {
    // Name typewriter effect
    const heroTitle = heroRef.current?.querySelector('h1');
    if (heroTitle) {
      // Remove the typing animation class after animation completes
      setTimeout(() => {
        heroTitle.classList.add('typing-complete');
      }, 4000); // 3s animation + 1s delay
    }

    // Subtitle typewriter effect
    const heroSubtitle = heroRef.current?.querySelector('h2');
    if (heroSubtitle) {
      const text = heroSubtitle.textContent;
      heroSubtitle.setAttribute('data-text', text);
      heroSubtitle.innerHTML = '';
      
      setTimeout(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
          heroSubtitle.innerHTML = text.slice(0, index + 1);
          index++;
          if (index === text.length) {
            clearInterval(typeInterval);
          }
        }, 100);
      }, 4500); // Start after name animation completes
    }
  }, []);

  // Staggered animation for skills
  useEffect(() => {
    const skills = skillsRef.current?.querySelectorAll('.skill');
    if (skills) {
      skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.classList.add('scroll-reveal', 'fade-scale');
      });
    }
  }, []);

  // Floating animation trigger
  const handleSkillHover = (e) => {
    e.target.style.animation = 'float 2s ease-in-out infinite';
  };

  const handleSkillLeave = (e) => {
    e.target.style.animation = '';
  };

  return (
    <section className="home-section">
      <div className="container">
        <div className="hero" ref={heroRef}>
          <div className="hero-content scroll-reveal fade-left">
            <h1>{t('home.hero.title', { name: 'Ndizeye Alain' })}</h1>
            <h2>{t('home.hero.role')}</h2>
            <p className="hero-description">{t('home.hero.desc')}</p>
            <div className="hero-buttons scroll-reveal fade-up">
              <Link to="/projects" className="btn btn-primary">
                {t('home.cta.projects')}
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t('home.cta.contact')}
              </Link>
            </div>
            {/* WhatsApp CTA Card */}
            <div style={{ marginTop: '2.5rem' }} className="scroll-reveal fade-up">
              <WhatsAppCTA
                variant="card"
                message="Hi Alain! I saw your portfolio home page and would love to chat."
              />
            </div>
          </div>
          
          <div className="hero-skills scroll-reveal fade-right" ref={skillsRef}>
            <h3 className="skills-title">Tech Stack</h3>
            <div className="skills-container">
              <div 
                className="skill" 
                title="React JS"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <FaReact className="skill-icon" />
                <span className="skill-name">React JS</span>
              </div>
              <div 
                className="skill" 
                title="Node.js"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <FaNodeJs className="skill-icon" />
                <span className="skill-name">Node.js</span>
              </div>
              <div 
                className="skill" 
                title="JavaScript"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <SiJavascript className="skill-icon" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div 
                className="skill" 
                title="Java"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <FaJava className="skill-icon" />
                <span className="skill-name">Java</span>
              </div>
              <div 
                className="skill" 
                title="PostgreSQL"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <FaDatabase className="skill-icon" />
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div 
                className="skill" 
                title="Html & Css"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <FaHtml5 className="skill-icon" />
                <span className="skill-name">Html & Css</span>
              </div>
              <div 
                className="skill" 
                title="Next JS"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <SiC className="skill-icon" />
                <span className="skill-name">Next JS</span>
              </div>
              <div 
                className="skill" 
                title="Express JS"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <SiC className="skill-icon" />
                <span className="skill-name">Express JS</span>
              </div>
              <div 
                className="skill" 
                title="Typescript"
                onMouseEnter={handleSkillHover}
                onMouseLeave={handleSkillLeave}
              >
                <SiC className="skill-icon" />
                <span className="skill-name">Typescript</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="featured-projects scroll-reveal fade-up" ref={projectsRef}>
          <h2 className="section-title">{t('home.featured.title')}</h2>
          <div className="projects-preview">
            <div className="project-card scroll-reveal fade-up">
              <div className="project-image">
                <div className="image-container">
                  <picture>
                    <source 
                      srcSet="/assets/images/Screenshot 2025-06-12 141855.webp" 
                      type="image/webp" 
                    />
                    <img 
                      src="/assets/images/Screenshot 2025-06-12 141855.png" 
                      alt="Student Portal" 
                      className="project-img"
                      loading="lazy"
                      width="600"
                      height="400"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/images/project-placeholder.jpg';
                      }}
                    />
                  </picture>
                </div>
                <div className="project-tech">
                  <span>Java</span>
                  <span>React.js</span>
                  <span>PostgreSQL</span>
                  <span>Springboot</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className="project-info">
                <h3>AUCTION MANAGMENT SYSTEM</h3>
                <p>{t('projectDescriptions.2', { defaultValue: auctionProject?.description })}</p>
                <Link to="/projects" className="project-link">
                  {t('home.featured.learnMore')}
                  <span>→</span>
                </Link>
              </div>
            </div>
            
            <div className="project-card scroll-reveal fade-up">
              <div className="project-image">
                <div className="image-container">
                  <picture>
                    <source 
                      srcSet="/assets/images/ishore-ecommerce-outsourcing.webp" 
                      type="image/webp" 
                    />
                    <img 
                      src="/assets/images/ishore-ecommerce-outsourcing.png" 
                      alt="E-commerce Project" 
                      className="project-img"
                      loading="lazy"
                      width="600"
                      height="400"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/images/project-placeholder.jpg';
                      }}
                    />
                  </picture>
                </div>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="project-info">
                <h3>E-COMMERCE</h3>
                <p>{t('home.featured.descriptions.ecommerce')}</p>
                <Link to="/projects" className="project-link">
                  {t('home.featured.learnMore')}
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;