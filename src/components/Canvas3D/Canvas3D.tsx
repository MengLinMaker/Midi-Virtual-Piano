import { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import './Canvas3D.scss'
import { UtilCursor } from '../../components'

export default function Canvas3D() {

  return (
    <section id="3Dcanvas" className='visualiser'>
      <UtilCursor/>
      <Canvas>
        <OrbitControls/>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        <Box position={[-1.2, 0, 0]}/>
        <Box position={[1.2, 0, 0]}/>
      </Canvas>
    </section>
  )
}



function Box(props:any) {
  // This reference will give us direct access to the mesh
  const mesh:any = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}