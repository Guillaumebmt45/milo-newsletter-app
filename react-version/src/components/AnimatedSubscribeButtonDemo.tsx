"use client";

import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { useState } from "react";

// Simple SVG icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

interface AnimatedSubscribeButtonControlledDemoProps {
  onSubscribeClick?: () => boolean;
}

export function AnimatedSubscribeButtonControlledDemo({ onSubscribeClick }: AnimatedSubscribeButtonControlledDemoProps) {
  const [subscribed, setSubscribed] = useState(false);

  function handleClick() {
    // Si une fonction de validation est fournie, l'exécuter
    if (onSubscribeClick && !onSubscribeClick()) {
      return; // Arrêter si la validation échoue
    }
    
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  }

  return (
    <AnimatedSubscribeButton
      className="px-6 py-3 md:px-8 md:py-3 font-semibold rounded-xl whitespace-nowrap min-w-[140px] text-sm md:text-base"
      subscribeStatus={subscribed}
      onClick={handleClick}
    >
      <span className="group inline-flex items-center">
        S'inscrire
        <ChevronRightIcon className="ml-1 size-4" />
      </span>
      <span className="group inline-flex items-center">
        <CheckIcon className="mr-2 size-4" />
        Inscrit
      </span>
    </AnimatedSubscribeButton>
  );
}