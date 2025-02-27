"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";

interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export function MagneticButton({
  children,
  strength = 0.2,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || !isHovered) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    controls.start({
      x: x * strength,
      y: y * strength,
      transition: { type: "spring", stiffness: 350, damping: 15 },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={controls}
      className="inline-block"
    >
      <Button ref={buttonRef} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}