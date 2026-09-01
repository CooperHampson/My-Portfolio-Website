import React, { useEffect, useRef, useState } from 'react';
import './AboutPage.css';

interface ObservedParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const ObservedParagraph: React.FC<ObservedParagraphProps> = ({ children, className = 'about-text' }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
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
      threshold: 0.9,
    }
  );

  if (paragraphRef.current) {
    observer.observe(paragraphRef.current);
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
    <p ref={paragraphRef} className={classNames}>{children}</p>
  );
};