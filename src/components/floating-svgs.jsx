"use client";

import React, { useEffect, useState } from "react";
import {
  CreditCard,
  DollarSign,
  PiggyBank,
  Wallet,
  BarChart,
  Landmark,
  Receipt,
  Calculator,
} from "lucide-react";

// SVG components to use for floating elements
const svgComponents = [
  CreditCard,
  DollarSign,
  PiggyBank,
  Wallet,
  BarChart,
  Landmark,
  Receipt,
  Calculator,
];

export default function FloatingSvgs({
  containerClassName = "absolute inset-0 overflow-hidden pointer-events-none",
  count = 100,
  minSize = 16,
  maxSize = 40,
  minDuration = 15,
  maxDuration = 30,
  color = "rgba(0, 176, 80, 0.15)", // Using the green brand color with opacity
}) {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Generate floating elements on component mount
    const elements = [];

    for (let i = 0; i < count; i++) {
      // Randomly select an SVG component
      const SvgComponent =
        svgComponents[Math.floor(Math.random() * svgComponents.length)];

      // Random size between minSize and maxSize
      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;

      // Random positions
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;

      // Random animation duration
      const duration =
        Math.floor(Math.random() * (maxDuration - minDuration)) + minDuration;

      // Random delay
      const delay = Math.random() * 10;

      // Random rotation
      const rotation = Math.random() * 360;

      // Random direction (1 or -1)
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const directionY = Math.random() > 0.5 ? 1 : -1;

      elements.push(
        <div
          key={i}
          className="absolute"
          style={{
            left,
            top,
            width: `${size}px`,
            height: `${size}px`,
            animation: `float-x-${
              directionX > 0 ? "right" : "left"
            } ${duration}s infinite ease-in-out ${delay}s, float-y-${
              directionY > 0 ? "down" : "up"
            } ${duration * 0.7}s infinite ease-in-out ${delay}s, rotate ${
              duration * 1.5
            }s infinite linear ${delay}s`,
            transform: `rotate(${rotation}deg)`,
            opacity: 0.7,
          }}
        >
          <SvgComponent size={size} color={color} strokeWidth={1.5} />
        </div>
      );
    }

    setFloatingElements(elements);
  }, [count, minSize, maxSize, minDuration, maxDuration, color]);

  return <div className={containerClassName}>{floatingElements}</div>;
}
