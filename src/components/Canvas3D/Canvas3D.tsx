import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import './Canvas3D.scss'
import { UtilCursor } from '../../components'
import { KeyLight, FillLight, RimLight } from './Scene/Light'
import Keyboard from './Keyboard/Keyboard'



export default function Canvas3D() {

  return (
    <section id="3Dcanvas" className='visualiser'>
      <UtilCursor/>
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0,5,5]} />
        <OrbitControls/>
        <spotLight position={[0,0,-10]}/>
        <FillLight brightness={5} color={"#bdefff"} />
        <RimLight brightness={100} color={"#fff"} />
        <KeyLight brightness={10} color={"#ffc9f9"} />

        <Keyboard/>

      </Canvas>
    </section>
  )
}