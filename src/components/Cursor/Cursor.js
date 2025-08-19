import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let px = 0;
    let py = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    };

    const animate = () => {
      px += (mouseX - px) * 0.2;
      py += (mouseY - py) * 0.2;
      cursor.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      requestAnimationFrame(animate);
    };

    const onPointerLeave = () => {
      cursor.style.opacity = '0';
    };

    const onHover = () => cursor.classList.add('cursor--hover');
    const onUnhover = () => cursor.classList.remove('cursor--hover');

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onPointerLeave);
    document.querySelectorAll('a, button, .project-card, .hero-btn').forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onUnhover);
    });

    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.querySelectorAll('a, button, .project-card, .hero-btn').forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onUnhover);
      });
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
};

export default Cursor;
