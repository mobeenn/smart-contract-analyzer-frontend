import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
   Float,
   MeshDistortMaterial,
   Sphere,
   Box,
   Torus,
   OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
   const mesh = useRef();
   const count = 200;

   const positions = useMemo(() => {
      const arr = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
         arr[i * 3] = (Math.random() - 0.5) * 12;
         arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
         arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
      return arr;
   }, []);

   useFrame((state) => {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
   });

   return (
      <points ref={mesh}>
         <bufferGeometry>
            <bufferAttribute
               attach="attributes-position"
               args={[positions, 3]}
            />
         </bufferGeometry>
         <pointsMaterial
            size={0.04}
            color="#22d3ee"
            transparent
            opacity={0.6}
         />
      </points>
   );
}

function CoreShield() {
   const mesh = useRef();
   const ring1 = useRef();
   const ring2 = useRef();

   useFrame((state) => {
      const t = state.clock.elapsedTime;
      mesh.current.rotation.y = t * 0.4;
      mesh.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      ring1.current.rotation.z = t * 0.8;
      ring1.current.rotation.x = t * 0.3;
      ring2.current.rotation.z = -t * 0.6;
      ring2.current.rotation.y = t * 0.4;
   });

   return (
      <group>
         {/* Central distorted sphere */}
         <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <Sphere ref={mesh} args={[1.1, 64, 64]} position={[0, 0, 0]}>
               <MeshDistortMaterial
                  color="#0e7490"
                  distort={0.35}
                  speed={2}
                  roughness={0.1}
                  metalness={0.9}
                  emissive="#06b6d4"
                  emissiveIntensity={0.3}
               />
            </Sphere>
         </Float>

         {/* Orbit ring 1 */}
         <Torus ref={ring1} args={[1.8, 0.03, 16, 100]} position={[0, 0, 0]}>
            <meshStandardMaterial
               color="#22d3ee"
               emissive="#22d3ee"
               emissiveIntensity={1}
               transparent
               opacity={0.8}
            />
         </Torus>

         {/* Orbit ring 2 */}
         <Torus
            ref={ring2}
            args={[2.3, 0.02, 16, 100]}
            position={[0, 0, 0]}
            rotation={[Math.PI / 3, 0, 0]}
         >
            <meshStandardMaterial
               color="#06b6d4"
               emissive="#06b6d4"
               emissiveIntensity={0.6}
               transparent
               opacity={0.5}
            />
         </Torus>
      </group>
   );
}

function FloatingCube({ position, scale = 1, speed = 1 }) {
   const mesh = useRef();
   useFrame((state) => {
      const t = state.clock.elapsedTime * speed;
      mesh.current.rotation.x = t * 0.5;
      mesh.current.rotation.y = t * 0.7;
      mesh.current.position.y = position[1] + Math.sin(t) * 0.2;
   });

   return (
      <Box
         ref={mesh}
         args={[0.3 * scale, 0.3 * scale, 0.3 * scale]}
         position={position}
      >
         <meshStandardMaterial
            color="#0891b2"
            emissive="#22d3ee"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.85}
            wireframe={false}
         />
      </Box>
   );
}

function HexGrid() {
   const mesh = useRef();
   useFrame((state) => {
      mesh.current.rotation.x = -Math.PI / 2;
      mesh.current.position.y =
         -2.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
   });

   const geometry = useMemo(() => {
      const geo = new THREE.PlaneGeometry(10, 10, 20, 20);
      return geo;
   }, []);

   return (
      <mesh ref={mesh} geometry={geometry}>
         <meshStandardMaterial
            color="#0e7490"
            wireframe
            transparent
            opacity={0.15}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
         />
      </mesh>
   );
}

function Scene() {
   return (
      <>
         <ambientLight intensity={0.2} />
         <pointLight position={[5, 5, 5]} intensity={1.5} color="#22d3ee" />
         <pointLight position={[-5, -3, -5]} intensity={0.8} color="#0891b2" />
         <pointLight position={[0, 0, 4]} intensity={0.5} color="#ffffff" />
         <fog attach="fog" args={["#000000", 8, 20]} />

         <ParticleField />
         <CoreShield />
         <HexGrid />

         <FloatingCube position={[2.5, 1.2, 0.5]} scale={1.2} speed={0.8} />
         <FloatingCube position={[-2.8, 0.8, -0.5]} scale={0.9} speed={1.1} />
         <FloatingCube position={[2.0, -1.5, 1.0]} scale={0.7} speed={1.4} />
         <FloatingCube position={[-2.2, -1.2, 0.2]} scale={1.0} speed={0.9} />
         <FloatingCube position={[0.5, 2.5, -1.0]} scale={0.6} speed={1.2} />
      </>
   );
}

export default function Hero3D() {
   return (
      <div className="w-full h-full absolute inset-0">
         <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
         >
            <Scene />
         </Canvas>
      </div>
   );
}
