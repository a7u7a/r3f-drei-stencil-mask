import { Canvas } from '@react-three/fiber'
import { Mask, useMask, OrbitControls, Grid } from '@react-three/drei'

export function App() {
  return (
    <Canvas linear orthographic camera={{ zoom: 80 }}>
      <Mask id={1} colorWrite={true} depthWrite={false} position={[-1.1, 0, 0]}>
        <ringGeometry args={[0.5, 1, 64]} />
      </Mask>
      <MaskedContent />
      <OrbitControls makeDefault />
      <Grid />
    </Canvas>
  )
}

function MaskedContent() {
  const stencil = useMask(1)
  return (
    <group>
      <mesh position={[-0.75, 0, 0]} scale={1}>
        <torusKnotGeometry args={[0.6, 0.2, 128, 64]} />
        <meshNormalMaterial {...stencil} />
      </mesh>
    </group>
  )
}
