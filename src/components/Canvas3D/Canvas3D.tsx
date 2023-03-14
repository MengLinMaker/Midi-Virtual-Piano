import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'

import './Canvas3D.scss'
import { UtilCursor } from '../../components'
import { Background, Camera, Lighting } from './Scene'
import Keyboard from './Keyboard/Keyboard'



export default function Canvas3D() {
  const pos:number = 600/window.innerWidth
  return (
    <section id="3Dcanvas" className='visualiser'>
      <UtilCursor/>
      <Canvas shadows={false} style={{background: 'white'}} camera={{fov: 45, position: [0,pos,pos*4]}}>
        <Stats showPanel={-1}/>
        <Camera/>
        <Lighting/>
        <Background/>
        <Keyboard/>
      </Canvas>
    </section>
  )
}