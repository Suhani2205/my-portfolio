"use client";

import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <div className="inline">
        {words.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.split("").map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  key={`char-${index}`}
                  className={cn(word.className, "opacity-0")}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      ref={scope}
      className={cn("text-base font-bold text-center", className)}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-[24px] md:h-[34px] lg:h-[40px] bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};