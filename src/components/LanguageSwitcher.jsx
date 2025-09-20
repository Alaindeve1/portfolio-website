import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2) || 'en';

  useEffect(() => {
    const lang = current || 'en';
    document.documentElement.lang = lang;
  }, [current]);

  const changeLang = (lng) => {
    if (lng !== current) {
      i18n.changeLanguage(lng);
      try { localStorage.setItem('i18nextLng', lng); } catch {}
      document.documentElement.lang = lng;
    }
  };

  return (
    <div className="lang-switch" role="tablist" aria-label="Language selector">
      <button
        type="button"
        className={`lang-seg ${current === 'en' ? 'active' : ''}`}
        role="tab"
        aria-selected={current === 'en'}
        onClick={() => changeLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-seg ${current === 'fr' ? 'active' : ''}`}
        role="tab"
        aria-selected={current === 'fr'}
        onClick={() => changeLang('fr')}
      >
        FR
      </button>
      <span className={`lang-ind ${current === 'fr' ? 'right' : 'left'}`} aria-hidden="true" />
    </div>
  );
};

export default LanguageSwitcher;
