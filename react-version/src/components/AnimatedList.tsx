"use client";

import React from 'react';

// Simple cn utility function
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Add CSS animation styles
const animationStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .slide-in-animation {
    animation: slideInUp 0.5s ease-out forwards;
  }
`;

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedList({ children, className }: AnimatedListProps) {
  const [items, setItems] = React.useState<React.ReactNode[]>([]);
  const childrenArray = React.Children.toArray(children);

  React.useEffect(() => {
    const addItem = (index: number) => {
      if (index < childrenArray.length) {
        setItems(prev => [...prev, childrenArray[index]]);
        setTimeout(() => addItem(index + 1), 1000);
      }
    };

    setItems([]);
    addItem(0);
  }, [childrenArray]);

  React.useEffect(() => {
    // Inject CSS styles
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="opacity-0 slide-in-animation"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}