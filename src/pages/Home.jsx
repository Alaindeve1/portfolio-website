import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiC } from 'react-icons/si';
import '../styles/HomeStyles.css';
import '../styles/Animations.css';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { useTranslation } from 'react-i18next';
import projectsData from '../data/projectsData';
import Typewriter from '../components/Typewriter';

const Home = () => {
  const { t } = useTranslation('common');
  const auctionProject = projectsData.find(p => p.id === 2);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);
  return (
    <section className="home-section" ref={sectionRef}>
      <div className="container">
        <div className={`hero ${isVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            <h1>{t('home.hero.title', { name: 'Ndizeye Alain' })}</h1>
            <h2 className="role-text">
              <Typewriter 
                text={[
                  t('home.hero.role1', 'Versatile Backend Developer'),
                  t('home.hero.role2', 'Full-Stack Capable'),
                  t('home.hero.role3', 'Certified Project Manager')
                ]} 
                speed={100}
                eraseSpeed={50}
                delay={2000}
              />
            </h2>
            <p className="hero-description">{t('home.hero.desc')}</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                {t('home.cta.projects')}
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t('home.cta.contact')}
                
              </Link>
            </div>
            {/* WhatsApp CTA Card */}
        <div style={{ marginTop: '2.5rem' }}>
          <WhatsAppCTA
            variant="card"
            message="Hi Alain! I saw your portfolio home page and would love to chat."
          />
        </div>
          </div>
          
          <div className={`hero-skills ${isVisible ? 'visible' : ''}`}>
            <h3 className="skills-title">Tech Stack</h3>
            <div className="skills-container">
              <div className="skill" title="React JS">
                <FaReact className="skill-icon" />
                <span className="skill-name">React JS</span>
              </div>
              <div className="skill" title="Node.js">
                <FaNodeJs className="skill-icon" />
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill" title="JavaScript">
                <SiJavascript className="skill-icon" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill" title="Java">
                <FaJava className="skill-icon" />
                <span className="skill-name">Java</span>
              </div>
              <div className="skill" title="PostgreSQL">
                <FaDatabase className="skill-icon" />
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div className="skill" title="Html & Css">
                <FaHtml5 className="skill-icon" />
                <span className="skill-name">Html & Css</span>
              </div>
             
              <div className="skill" title="Next JS">
                <SiC className="skill-icon" />
                <span className="skill-name">Next JS</span>
              </div>
              <div className="skill" title="Express JS">
                <SiC className="skill-icon" />
                <span className="skill-name">Express JS</span>
              </div>
              <div className="skill" title="Typescript">
                <SiC className="skill-icon" />
                <span className="skill-name">Typescript</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`featured-projects fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t('home.featured.title')}</h2>
          <div className="projects-preview">
            <div className="project-card">
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
            
            <div className="project-card">
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
