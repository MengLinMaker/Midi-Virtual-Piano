import { useGLTF } from '@react-three/drei'
import pianoModel from '../../../assets/3D/keyboard/keyboard.glb?url'



export default function Lighting() {
  const { nodes }:any = useGLTF(pianoModel)
  const scale:number = 3
  return (
    <>
    <group position={[-0.65,0.4,0]}>
      <spotLight intensity={0.2*scale} color='#FEFEFF' position={nodes.FrontLight.position} angle={2} castShadow/>
      <spotLight intensity={0.2*scale} color='#FE654F' position={nodes.LeftLight.position} angle={2} castShadow/>
      <spotLight intensity={0.1*scale} color='#FED99B' position={nodes.RightLight.position} angle={2} castShadow/>
      <spotLight intensity={0.3*scale} color='#D6EFFF' position={nodes.BackLight.position} angle={2} castShadow/>
    </group>
    </>
  )
}