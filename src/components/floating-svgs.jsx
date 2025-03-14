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
  color = "rgba(0, 176, 80, 0.15)",
  zIndex = 10,
  isStatic = false,
}) {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const elements = [];

    for (let i = 0; i < count; i++) {
      const SvgComponent =
        svgComponents[Math.floor(Math.random() * svgComponents.length)];

      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const duration =
        Math.floor(Math.random() * (maxDuration - minDuration)) + minDuration;
      const delay = Math.random() * 10;
      const rotation = Math.random() * 360;
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const directionY = Math.random() > 0.5 ? 1 : -1;

      const animationStyle = isStatic
        ? {}
        : {
            animation: `float-x-${
              directionX > 0 ? "right" : "left"
            } ${duration}s infinite ease-in-out ${delay}s, float-y-${
              directionY > 0 ? "down" : "up"
            } ${duration * 0.7}s infinite ease-in-out ${delay}s, rotate ${
              duration * 1.5
            }s infinite linear ${delay}s`,
          };

      elements.push(
        <div
          key={i}
          className="absolute"
          style={{
            left,
            top,
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
            opacity: 0.7,
            zIndex: zIndex,
            ...animationStyle,
          }}
        >
          <SvgComponent size={size} color={color} strokeWidth={1.5} />
        </div>
      );
    }

    setFloatingElements(elements);
  }, [
    count,
    minSize,
    maxSize,
    minDuration,
    maxDuration,
    color,
    zIndex,
    isStatic,
  ]);

  return <div className={containerClassName}>{floatingElements}</div>;
}
