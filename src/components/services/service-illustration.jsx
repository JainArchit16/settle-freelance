"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ServiceIllustration({
  service = "Personal Loan",
  primaryColor = "#00B050",
  secondaryColor = "#10B981",
  className = "",
}) {
  const svgRef = useRef(null);

  // Animation for the floating elements
  useEffect(() => {
    if (!svgRef.current) return;

    const floatingElements = svgRef.current.querySelectorAll(".floating");
    const animations = [];

    floatingElements.forEach((element) => {
      // Create random animation parameters for each element
      const duration = 3 + Math.random() * 2;
      const delay = Math.random() * 2;
      const yAmount = 5 + Math.random() * 10;

      // Apply the animation
      const animation = element.animate(
        [
          { transform: "translateY(0px)" },
          { transform: `translateY(${yAmount}px)` },
          { transform: "translateY(0px)" },
        ],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          iterations: Number.POSITIVE_INFINITY,
          easing: "ease-in-out",
        }
      );

      animations.push(animation);
    });

    return () => {
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  // Determine which service-specific elements to show
  const showCreditCard =
    service === "Credit Card" || service === "Personal Loan";
  const showHouse = service === "Home Loan";
  const showCar = service === "Vehicle Loan";
  const showGraduation = service === "Education Loan";
  const showShield = service === "Anti-Harassment";

  return (
    <motion.svg
      ref={svgRef}
      viewBox="0 0 800 600"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Definitions for gradients, filters, and patterns */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={`${primaryColor}20`} />
          <stop offset="100%" stopColor={`${primaryColor}05`} />
        </linearGradient>

        <linearGradient
          id="primaryGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
          <feOffset dx="0" dy="10" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke={`${primaryColor}10`}
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* Background elements */}
      <rect
        x="0"
        y="0"
        width="800"
        height="600"
        fill="url(#grid)"
        opacity="0.5"
      />
      <circle cx="400" cy="300" r="250" fill="url(#bgGradient)" opacity="0.7" />

      {/* Main document/contract - central to all services */}
      <g className="floating" style={{ "--index": 1 }} filter="url(#shadow)">
        <rect x="300" y="150" width="200" height="300" rx="10" fill="white" />
        <rect
          x="320"
          y="180"
          width="160"
          height="15"
          rx="2"
          fill={`${primaryColor}20`}
        />
        <rect
          x="320"
          y="210"
          width="120"
          height="15"
          rx="2"
          fill={`${primaryColor}20`}
        />
        <rect
          x="320"
          y="240"
          width="160"
          height="15"
          rx="2"
          fill={`${primaryColor}20`}
        />
        <rect
          x="320"
          y="270"
          width="140"
          height="15"
          rx="2"
          fill={`${primaryColor}20`}
        />
        <rect
          x="320"
          y="300"
          width="160"
          height="15"
          rx="2"
          fill={`${primaryColor}20`}
        />
        <rect
          x="320"
          y="330"
          width="100"
          height="15"
          rx="2"
          fill={`${primaryColor}20`}
        />

        {/* Signature line */}
        <rect
          x="320"
          y="380"
          width="120"
          height="2"
          fill={`${primaryColor}40`}
        />
        <path
          d="M 330 380 Q 340 370, 350 380 Q 360 390, 370 380"
          stroke={primaryColor}
          fill="none"
          strokeWidth="1.5"
        />

        {/* Stamp/seal */}
        <circle cx="420" cy="400" r="25" fill={`${primaryColor}20`} />
        <path
          d="M 410 400 L 420 410 L 430 390"
          stroke={primaryColor}
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* Checkmark/approval - central to all services */}
      <g className="floating" style={{ "--index": 2 }}>
        <circle cx="200" cy="200" r="40" fill="url(#primaryGradient)" />
        <path
          d="M 180 200 L 195 215 L 220 185"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Rupee/money symbols - central to all services */}
      <g className="floating" style={{ "--index": 3 }}>
        <circle
          cx="550"
          cy="250"
          r="35"
          fill="url(#primaryGradient)"
          opacity="0.9"
        />
        <text
          x="550"
          y="265"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
          fontSize="30"
        >
          ₹
        </text>
      </g>

      <g className="floating" style={{ "--index": 4 }}>
        <circle
          cx="600"
          cy="320"
          r="25"
          fill="url(#primaryGradient)"
          opacity="0.7"
        />
        <text
          x="600"
          y="330"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
          fontSize="22"
        >
          ₹
        </text>
      </g>

      <g className="floating" style={{ "--index": 5 }}>
        <circle
          cx="520"
          cy="380"
          r="20"
          fill="url(#primaryGradient)"
          opacity="0.5"
        />
        <text
          x="520"
          y="388"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
          fontSize="18"
        >
          ₹
        </text>
      </g>

      {/* Credit card - shown for credit card and personal loan services */}
      {showCreditCard && (
        <g className="floating" style={{ "--index": 6 }}>
          <rect
            x="150"
            y="300"
            width="120"
            height="80"
            rx="10"
            fill={primaryColor}
          />
          <rect
            x="170"
            y="330"
            width="80"
            height="10"
            rx="2"
            fill="white"
            opacity="0.3"
          />
          <rect
            x="170"
            y="350"
            width="40"
            height="10"
            rx="2"
            fill="white"
            opacity="0.3"
          />
          <rect
            x="170"
            y="315"
            width="30"
            height="5"
            rx="1"
            fill="gold"
            opacity="0.8"
          />
        </g>
      )}

      {/* House - shown for home loan services */}
      {showHouse && (
        <g className="floating" style={{ "--index": 7 }}>
          <path
            d="M 150 350 L 200 300 L 250 350 L 250 420 L 150 420 Z"
            fill={primaryColor}
          />
          <rect
            x="185"
            y="370"
            width="30"
            height="50"
            fill="white"
            opacity="0.3"
          />
          <rect
            x="190"
            y="380"
            width="20"
            height="20"
            fill="white"
            opacity="0.5"
          />
        </g>
      )}

      {/* Car - shown for vehicle loan services */}
      {showCar && (
        <g className="floating" style={{ "--index": 8 }}>
          <rect
            x="150"
            y="380"
            width="100"
            height="40"
            rx="10"
            fill={primaryColor}
          />
          <rect
            x="160"
            y="350"
            width="80"
            height="30"
            rx="5"
            fill={primaryColor}
          />
          <circle cx="175" cy="420" r="12" fill="#333" />
          <circle cx="225" cy="420" r="12" fill="#333" />
          <rect
            x="170"
            y="360"
            width="15"
            height="10"
            fill="white"
            opacity="0.5"
          />
          <rect
            x="195"
            y="360"
            width="15"
            height="10"
            fill="white"
            opacity="0.5"
          />
        </g>
      )}

      {/* Graduation cap - shown for education loan services */}
      {showGraduation && (
        <g className="floating" style={{ "--index": 9 }}>
          <path d="M 150 350 L 250 350 L 200 320 Z" fill={primaryColor} />
          <rect x="190" y="350" width="20" height="20" fill={primaryColor} />
          <rect x="185" y="370" width="30" height="5" fill={primaryColor} />
        </g>
      )}

      {/* Shield - shown for anti-harassment services */}
      {showShield && (
        <g className="floating" style={{ "--index": 10 }}>
          <path
            d="M 200 300 L 150 330 L 150 380 C 150 420, 200 440, 200 440 C 200 440, 250 420, 250 380 L 250 330 Z"
            fill={primaryColor}
            opacity="0.9"
          />
          <path
            d="M 180 360 L 195 375 L 220 340"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      )}

      {/* Connecting lines */}
      <path
        d="M 240 200 C 270 220, 290 230, 300 250"
        stroke={`${primaryColor}40`}
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />

      <path
        d="M 400 300 C 450 290, 500 270, 550 250"
        stroke={`${primaryColor}40`}
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />

      {/* Percentage sign for debt reduction */}
      <g className="floating" style={{ "--index": 11 }}>
        <circle cx="250" cy="450" r="35" fill="white" filter="url(#shadow)" />
        <text
          x="250"
          y="462"
          textAnchor="middle"
          fill={primaryColor}
          fontWeight="bold"
          fontSize="30"
        >
          %
        </text>
      </g>

      {/* Decorative elements */}
      <circle cx="150" cy="150" r="10" fill={`${primaryColor}30`} />
      <circle cx="650" cy="450" r="15" fill={`${secondaryColor}30`} />
      <circle cx="600" cy="150" r="8" fill={`${primaryColor}20`} />
      <circle cx="200" cy="500" r="12" fill={`${secondaryColor}20`} />

      {/* Pulse effect around main document */}
      <circle
        cx="400"
        cy="300"
        r="120"
        fill="none"
        stroke={primaryColor}
        strokeWidth="2"
        opacity="0.2"
      >
        <animate
          attributeName="r"
          from="120"
          to="150"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.2"
          to="0"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </motion.svg>
  );
}
