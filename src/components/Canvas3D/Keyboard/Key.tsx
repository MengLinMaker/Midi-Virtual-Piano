// @ts-nocheck

import { forwardRef, useEffect, useState } from 'react'
import { useSpring } from '@react-spring/core'
import keyboardEvent from '../../../event/keyboardEvent'
import { animated } from '@react-spring/three'
import { ThreeEvent } from '@react-three/fiber'
import { delay } from 'underscore'



const Key = forwardRef( (props:any, ref) => {
  const { material, position, model, colors, midiCode, setMidiPlay } = props


  // React-spring key animation states
  const [active, setActive] = useState(0);
  
  const { spring } = useSpring({
    spring: active,
    config: { mass: 0.1, tension: 1000, friction: 18, precision: 0.001 },
  });

  const rotation = spring.to([0, 1], [0, 0.07]);
  const color = spring.to([0, 1], colors)



  // KeyboardEvent key control
  function handle(e:KeyboardEvent) {
    delay(()=>{
    if (e.repeat) {return}
    if (ref.current[midiCode]==true) setActive(1)
    else setActive(0)
    },e-12)
  }

  useEffect(()=>{
    const keyDown = keyboardEvent.downEventSubscribe(handle)
    const keyUp = keyboardEvent.upEventSubscribe(handle)
    return ()=>{
      keyDown.unsubscribe()
      keyUp.unsubscribe()
    }
  },[])
  


  // MouseEvent key control
  function mouseKeyOff() {
    if (keyboardEvent.getKeyboardState() != false && !ref.current[midiCode]) {return}
    setActive(0), setMidiPlay(midiCode,false)
  }

  return (
    <animated.mesh position={position} geometry={model.geometry}
      rotation-x={rotation} castShadow={true}
      onPointerDown={(e:ThreeEvent<PointerEvent>) => {
        setActive(1), setMidiPlay(midiCode,true)
        e.stopPropagation()
      }}
      onPointerUp={mouseKeyOff}
      onPointerLeave={mouseKeyOff}
    >
      <animated.meshPhysicalMaterial color={color} {...material}/>
    </animated.mesh>
  )
})

export default Key