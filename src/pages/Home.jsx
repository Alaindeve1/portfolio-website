import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { 
  SiJavascript, 
  SiNextdotjs, 
  SiExpress, 
  SiTypescript, 
  SiPython, 
  SiSpringboot, 
  SiFastapi, 
  SiDocker, 
  SiFirebase, 
  SiAndroid, 
  SiTailwindcss, 
  SiWebrtc,
  SiGoogle,
  SiScikitlearn
} from 'react-icons/si';
import '../styles/HomeStyles.css';
import '../styles/Animations.css';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { useTranslation } from 'react-i18next';
import projectsData from '../data/projectsData';
import Typewriter from '../components/Typewriter';

const Home = () => {
  const { t } = useTranslation('common');
  const healthConnectProject = projectsData.find(p => p.id === 6);
  const sdaProject = projectsData.find(p => p.id === 7);
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
              <div className="skill" title="Next JS">
                <SiNextdotjs className="skill-icon" />
                <span className="skill-name">Next JS</span>
              </div>
              <div className="skill" title="TypeScript">
                <SiTypescript className="skill-icon" />
                <span className="skill-name">TypeScript</span>
              </div>
              <div className="skill" title="JavaScript">
                <SiJavascript className="skill-icon" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill" title="Html & Css">
                <FaHtml5 className="skill-icon" />
                <span className="skill-name">Html & Css</span>
              </div>
              <div className="skill" title="Tailwind CSS">
                <SiTailwindcss className="skill-icon" />
                <span className="skill-name">Tailwind CSS</span>
              </div>
              <div className="skill" title="Node.js">
                <FaNodeJs className="skill-icon" />
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill" title="Express JS">
                <SiExpress className="skill-icon" />
                <span className="skill-name">Express JS</span>
              </div>
              <div className="skill" title="Spring Boot">
                <SiSpringboot className="skill-icon" />
                <span className="skill-name">Spring Boot</span>
              </div>
              <div className="skill" title="FastAPI">
                <SiFastapi className="skill-icon" />
                <span className="skill-name">FastAPI</span>
              </div>
              <div className="skill" title="Python">
                <SiPython className="skill-icon" />
                <span className="skill-name">Python</span>
              </div>
              <div className="skill" title="Java">
                <FaJava className="skill-icon" />
                <span className="skill-name">Java</span>
              </div>
              <div className="skill" title="PostgreSQL">
                <FaDatabase className="skill-icon" />
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div className="skill" title="Firebase">
                <SiFirebase className="skill-icon" />
                <span className="skill-name">Firebase</span>
              </div>
              <div className="skill" title="Docker">
                <SiDocker className="skill-icon" />
                <span className="skill-name">Docker</span>
              </div>
              <div className="skill" title="Android">
                <SiAndroid className="skill-icon" />
                <span className="skill-name">Android</span>
              </div>
              <div className="skill" title="WebRTC">
                <SiWebrtc className="skill-icon" />
                <span className="skill-name">WebRTC</span>
              </div>
              <div className="skill" title="Gemini AI">
                <SiGoogle className="skill-icon" />
                <span className="skill-name">Gemini AI</span>
              </div>
              <div className="skill" title="scikit-learn">
                <SiScikitlearn className="skill-icon" />
                <span className="skill-name">scikit-learn</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`featured-projects fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t('home.featured.title')}</h2>
          <div className="projects-preview">

            {/* Health-Connect Featured Card */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-container">
                  <picture>
                    <source 
                      srcSet={healthConnectProject?.image} 
                      type="image/webp" 
                    />
                    <img 
                      src={healthConnectProject?.fallbackImage} 
                      alt="Health-Connect telehealth platform" 
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
                  {healthConnectProject?.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-info">
                <h3>{healthConnectProject?.title}</h3>
                <p>{t('projectDescriptions.6', { defaultValue: healthConnectProject?.description })}</p>
                <Link to="/projects" className="project-link">
                  {t('home.featured.learnMore')}
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* AI-Enhanced SDA Community Platform Featured Card */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-container">
                  <picture>
                    <source 
                      srcSet={sdaProject?.image} 
                      type="image/webp" 
                    />
                    <img 
                      src={sdaProject?.fallbackImage} 
                      alt="AI-Enhanced SDA Community Platform" 
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
                  {sdaProject?.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-info">
                <h3>{sdaProject?.title}</h3>
                <p>{t('projectDescriptions.7', { defaultValue: sdaProject?.description })}</p>
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

