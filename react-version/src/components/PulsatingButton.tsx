import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "rgba(255, 255, 255, 0.4)",
      duration = "1.5s",
      ...props
    },
    ref,
  ) => {
    const pulseKeyframes = `
      @keyframes customPulse {
        0%, 100% {
          opacity: 0.4;
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          opacity: 0.1;
          transform: translate(-50%, -50%) scale(1.05);
        }
      }
    `;

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: pulseKeyframes }} />
        <button
          ref={ref}
          className={cn(
            "relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center overflow-hidden",
            className,
          )}
          style={
            {
              "--pulse-color": pulseColor,
              "--duration": duration,
            } as React.CSSProperties
          }
          {...props}
        >
          <div className="relative z-10">{children}</div>
          <div 
            className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-lg"
            style={{
              background: pulseColor,
              animation: `customPulse ${duration} cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            }}
          />
        </button>
      </>
    );
  },
);

PulsatingButton.displayName = "PulsatingButton";
