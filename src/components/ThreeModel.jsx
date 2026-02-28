import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls, Stage, PerspectiveCamera, Center, Float } from '@react-three/drei';

const Model = ({ url }) => {
  const geom = useLoader(STLLoader, url);
  const meshRef = useRef();

  return (
    <Center>
      <mesh ref={meshRef} geometry={geom} castShadow receiveShadow>
        <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.8} />
      </mesh>
    </Center>
  );
};

const ThreeModel = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative group">
      <div className="absolute top-4 left-4 z-10 bg-blue-600/20 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/30">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Aperçu 3D Interactif</span>
      </div>
      
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-slate-900 flex-col gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 font-medium animate-pulse text-sm">Chargement du modèle 3D...</p>
        </div>
      }>
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          
          <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.7, blur: 2 }} adjustCamera={true}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Model url="/assets/dental-decimated.stl" />
            </Float>
          </Stage>
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={true} 
            autoRotate={true}
            autoRotateSpeed={0.5}
            minDistance={2}
            maxDistance={10}
          />
        </Canvas>
      </Suspense>
      
      <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[10px] text-slate-500 italic">Pincer pour zoomer • Cliquer pour tourner</p>
      </div>
    </div>
  );
};

export default ThreeModel;
