import { Canvas } from '@react-three/fiber'

import './Canvas3D.scss'
import { UtilCursor } from '../../components'
import Keyboard from './Keyboard/Keyboard'
import Lighting from './Scene/Lighting'
import Camera from './Scene/Camera'
import Background from './Scene/Background'
import { Stats } from '@react-three/drei'

export default function Canvas3D() {
  return (
    <section id="3Dcanvas" className='visualiser'>
      <UtilCursor/>
      <Canvas style={{background: 'white'}}>
        <Stats/>
        <Camera/>
        <Lighting/>
        <Background/>
        <Keyboard/>
      </Canvas>
    </section>
  )
}