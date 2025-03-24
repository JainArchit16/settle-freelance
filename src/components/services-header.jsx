"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense } from "react";

export default function ServicesHeader() {
  return (
    <div className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />

      {/* 3D Credit Card */}
      <div className="absolute right-0 top-0 w-full h-full md:w-1/2 pointer-events-none md:pointer-events-auto">
        <Suspense fallback={null}>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <PresentationControls
              global
              zoom={0.8}
              rotation={[0, -Math.PI / 4, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Float rotationIntensity={0.2}>
                <CreditCard
                  scale={1.5}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                />
              </Float>
            </PresentationControls>
            <Environment preset="city" />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/80 text-lg mb-2">Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Financial Freedom Through Expert Solutions
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              We offer specialized services to help you overcome financial
              challenges and achieve debt freedom.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
