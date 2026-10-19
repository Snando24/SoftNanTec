import { useEffect } from 'react';
import { SITE_URL } from '../config/site';

const setAttr = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/**
 * Actualiza title, description, canonical, Open Graph y Twitter por ruta.
 * Es una SPA sin SSR: los buscadores que ejecutan JavaScript (p. ej. Google) leen estos valores.
 */
const usePageMeta = ({ title, description, path, noindex = false }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setAttr('meta[name="description"]', 'content', description);
    setAttr('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow');
    setAttr('link[rel="canonical"]', 'href', url);
    setAttr('meta[property="og:url"]', 'content', url);
    setAttr('meta[property="og:title"]', 'content', title);
    setAttr('meta[property="og:description"]', 'content', description);
    setAttr('meta[name="twitter:url"]', 'content', url);
    setAttr('meta[name="twitter:title"]', 'content', title);
    setAttr('meta[name="twitter:description"]', 'content', description);
  }, [title, description, path, noindex]);
};

export default usePageMeta;
