import { useEffect, useRef } from 'react';

function Projects() {
  const blockRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const blockTop = blockRef.current.offsetTop;
      const scrollPos = window.scrollY;

      // If user scrolls near the block, snap to it
      if (Math.abs(scrollPos - blockTop) < 100) {
        window.scrollTo({
          top: blockTop,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: '100vh' }}>Scroll Down</div>

      <div
        ref={blockRef}
        style={{ height: '500px', background: 'lightgray' }}
      >
        <h2>Magnetized Block</h2>
      </div>

      <div style={{ height: '100vh' }}>More Content</div>
    </div>
  );
}

export default Projects;