// @ts-nocheck

import { useEffect, useRef, useState } from 'react'
import { useSpring } from '@react-spring/core'
import keyboardEvent from '../../../event/keyboardEvent'
import { animated } from '@react-spring/three'
import { ThreeEvent } from '@react-three/fiber'



export default function Key({ material, position, model, colors }:any) {
  const keyRef:any = useRef(null)
  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 0.1, tension: 1000, friction: 18, precision: 0.001 },
  });

  const rotation = spring.to([0, 1], [0, 0.07]);
  const color = spring.to([0, 1], colors)

  useEffect(()=>{
    const keyDown = keyboardEvent.downEventSubscribe(()=>setActive(Number(1)))
    const keyUp = keyboardEvent.upEventSubscribe(()=>setActive(Number(0)))
    return ()=>{
      keyDown.unsubscribe()
      keyUp.unsubscribe()
    }
  },[])
  
  function mouseKeyOff() {
    if (keyboardEvent.getKeyboardState() == false) {
      setActive(Number(0))
    } else if (keyboardEvent.getKeyboardState().type!='keydown'){
      setActive(Number(0))
    }
  }

  return (
    <animated.mesh ref={keyRef} position={position} geometry={model.geometry}
      rotation-x={rotation} castShadow
      onPointerDown={(e:ThreeEvent<PointerEvent>) => {
        setActive(Number(1))
        e.stopPropagation()
      }}
      onPointerUp={mouseKeyOff}
      onPointerLeave={mouseKeyOff}
    >
      <animated.meshPhysicalMaterial color={color} {...material}/>
    </animated.mesh>
  )
}