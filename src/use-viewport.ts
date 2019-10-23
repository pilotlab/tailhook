import { useState, useLayoutEffect } from 'react';

export const useViewport = () => {
  const [viewport, setViewport] = useState({ vw: 320, vh: 640 });

  useLayoutEffect(() => {
    const onResize = () => {
      const html = document.documentElement;
      const viewportHeight = window.innerHeight || html.clientHeight;
      const viewportWidth = window.innerWidth || html.clientWidth;
      setViewport({
        vw: viewportWidth,
        vh: viewportHeight,
      });
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return viewport;
};

export default useViewport;
