import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sube al inicio al cambiar de ruta; si la URL trae un ancla (#id), desplaza hasta ese elemento.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
