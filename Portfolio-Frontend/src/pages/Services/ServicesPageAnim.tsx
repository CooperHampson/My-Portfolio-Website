import React, { useEffect, useRef, useState } from 'react';
import './ServicesPage.css';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({ children, className = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-72px 0px 0px 0px',
        threshold: 0.1,
      }
    );
  
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
    },[]);

    const classNames= [
      className,
      isLoading ? 'is-loading' : '',
      !isIntersecting ? 'is-hidden' : ''
    ].filter(Boolean).join(' ');

    return (
      <div ref={elementRef} className={classNames}>{children}</div>
    );
};