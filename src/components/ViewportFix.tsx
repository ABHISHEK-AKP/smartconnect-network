'use client';

import { useEffect } from 'react';

export default function ViewportFix() {
  useEffect(() => {
    // Prevent horizontal scrolling
    const preventHorizontalScroll = () => {
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
      document.body.style.maxWidth = '100vw';
    };

    // Fix viewport meta tag for better mobile experience
    const fixViewport = () => {
      let viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      } else {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        document.head.appendChild(viewport);
      }
    };

    // Remove any elements that might be causing overflow
    const removeOverflowElements = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const computedStyle = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        
        // Check if element extends beyond viewport
        if (rect.right > window.innerWidth) {
          // Add styles to prevent overflow
          (el as HTMLElement).style.maxWidth = '100%';
          (el as HTMLElement).style.overflowX = 'hidden';
        }
      });
    };

    preventHorizontalScroll();
    fixViewport();
    
    // Run overflow check after a short delay to ensure all elements are rendered
    setTimeout(removeOverflowElements, 100);

    // Re-run on window resize
    const handleResize = () => {
      preventHorizontalScroll();
      setTimeout(removeOverflowElements, 100);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null; // This component doesn't render anything visible
}