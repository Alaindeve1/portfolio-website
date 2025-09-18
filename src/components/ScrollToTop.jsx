import React, { useEffect, useState } from 'react';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShow(y > 300);
    };

    // Run once on mount in case route loads scrolled position
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${show ? 'show' : ''}`}
      onClick={handleClick}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg
        className="arrow-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 5l-7 7 1.41 1.41L11 9.83V20h2V9.83l4.59 4.58L19 12l-7-7z" fill="currentColor"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;
