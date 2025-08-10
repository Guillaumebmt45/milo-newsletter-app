"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedSubscribeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  subscribeStatus: boolean;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  className,
  subscribeStatus,
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const initialText = childrenArray[0];
  const changeText = childrenArray[1];

  return (
    <button
      className={cn(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-xl bg-black/50 border border-white/20 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]",
        className,
      )}
      style={{
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.3), inset 0 -4px 8px rgba(0, 0, 0, 0.4)'
      }}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 z-10 flex transform items-center justify-center bg-gradient-to-r from-white to-gray-100 text-black transition-all duration-300",
          {
            "-translate-y-[150%]": subscribeStatus,
          },
        )}
        style={{
           boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.2)'
         }}
      >
        {initialText}
      </div>
      <div
        className={cn(
          "absolute inset-0 z-10 flex transform items-center justify-center bg-black text-white transition-all duration-300",
          {
            "-translate-y-[150%]": !subscribeStatus,
            "translate-y-0": subscribeStatus,
          },
        )}
        style={{
           boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.3)'
         }}
      >
        {changeText}
      </div>
    </button>
  );
};