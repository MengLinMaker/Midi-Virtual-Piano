// @ts-nocheck

import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useSpring } from '@react-spring/core'
import keyboardEvent from '../../../event/keyboardEvent'
import { animated } from '@react-spring/three'
import { ThreeEvent } from '@react-three/fiber'
import pianoModel from '../../../assets/3D/keyboard/keyboard.glb?url'



export default function Keyboard() {

  const keyMaterial:object = {
    specularIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.25,
  }

  const pos= [...Array(1).keys()]
  const keys = pos.map((i)=>
    <WhiteKey key={i} position={[3*i,0,0]} keyMaterial={keyMaterial}/>
  )

  return (
    <group scale={0.1}>
      <BlackKey position={[0,0,0]}  keyMaterial={keyMaterial}/>
      {keys}
    </group>
  )
}



function WhiteKey({ keyMaterial, position }:any) {
  const model:any = useGLTF(pianoModel)
  const keyRef:any = useRef(null)
  const [active, setActive] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 0.1, tension: 1000, friction: 18, precision: 0.001 },
  });

  const rotation = spring.to([0, 1], [0, 0.1]);
  const color = spring.to([0, 1], ["#ffffff", "#cc4400"])

  useEffect(()=>{
    const keyDown = keyboardEvent.downEventSubscribe(()=>setActive(Number(1)))
    const keyUp = keyboardEvent.upEventSubscribe(()=>setActive(Number(0)))
    return ()=>{
      keyDown.unsubscribe()
      keyUp.unsubscribe()
    }
  },[])
  
  return (
    <animated.mesh
      ref={keyRef}
      position={position}
      geometry={model.nodes.key21.geometry}
      rotation-x={rotation}
      castShadow

      onPointerDown={(e:ThreeEvent<PointerEvent>) => {
        setActive(Number(1))
        e.stopPropagation()
      }}
      onPointerUp={()=>{
        if (keyboardEvent.getKeyboardState() == false) {
          setActive(Number(0))
        } else if (keyboardEvent.getKeyboardState().type!='keydown'){
          setActive(Number(0))
        }
      }}
    >
      <animated.meshPhysicalMaterial color={color} {...keyMaterial}/>
    </animated.mesh>
  )
}



function BlackKey({ keyMaterial, position }:any) {
  const model:any = useGLTF(pianoModel)
  
  return (
    <mesh position={position} geometry={model.nodes.key22.geometry} castShadow> 
      <meshPhysicalMaterial color={'#111111'} {...keyMaterial} />
    </mesh>
  )
}