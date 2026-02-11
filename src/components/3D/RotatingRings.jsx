import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingRings = () => {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ring1.current) {
      ring1.current.rotation.x = time * 0.3;
      ring1.current.rotation.y = time * 0.2;
    }
    
    if (ring2.current) {
      ring2.current.rotation.x = time * -0.2;
      ring2.current.rotation.z = time * 0.3;
    }
    
    if (ring3.current) {
      ring3.current.rotation.y = time * 0.4;
      ring3.current.rotation.z = time * -0.1;
    }
  });

  return (
    <group>
      {/* Ring 1 - Outer */}
      <mesh ref={ring1} position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Ring 2 - Middle */}
      <mesh ref={ring2} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Ring 3 - Inner */}
      <mesh ref={ring3} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

export default RotatingRings;