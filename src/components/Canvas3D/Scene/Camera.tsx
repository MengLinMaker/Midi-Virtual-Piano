import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function Camera() {
  const pos:number = 600/window.innerWidth
  return(
    <>
      <OrbitControls/>
      <PerspectiveCamera makeDefault fov={45} position={[0,pos,pos*4]} />
    </>
  )
}