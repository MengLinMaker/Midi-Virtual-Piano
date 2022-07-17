import { useGLTF } from '@react-three/drei'
import pianoModel from '../../../assets/3D/keyboard/keyboard.glb?url'
import Key from './Key'
import Chasis from './Chasis'


export default function Keyboard() {
  const { nodes }:any = useGLTF(pianoModel)
  const keyMaterial:object = {
    specularIntensity: 3,
    clearcoat: 0.8,
    clearcoatRoughness: 0.3,
    reflectivity: 0.5,
  }
  const ChasisMaterial:object = {
    specularIntensity: 1,
    clearcoat: 0.55,
    clearcoatRoughness: 0.3,
    reflectivity: 0.5,
  }
  const color = {
    black: '#111111',
    white: '#FEFEFF',
    chasis: '#FE654F',
    active: '#FE654F',
  }
  const whiteKeyDist:number = 0.025

// @ts-nocheck

  const whitekeys = [...Array(52).keys()].map((i)=>
    <Key key={i} material={keyMaterial} position={[whiteKeyDist*i,0,0]} 
    model={nodes.WhiteKey} colors={[color.white,color.active]}/>
  )

  const blackkeys = [...Array(51).keys()].map((i)=>
    <Key key={i}  material={keyMaterial} position={[whiteKeyDist*(i+0.5),0,0]} 
    model={nodes.BlackKey} colors={[color.black,color.active]}/>
  )


  return (
    <group position={[-26*whiteKeyDist,0,0]} scale={1}>
      <Chasis color={color.chasis} material={ChasisMaterial} position={[-whiteKeyDist/2,0,0]}
      model={nodes.Chasis}/>
      {blackkeys}
      {whitekeys}
    </group>
  )
}