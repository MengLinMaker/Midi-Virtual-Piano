import { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import Key from './Key'
import Chasis from './Chasis'
import keyboardEvent from '../../../event/keyboardEvent'
import pianoModel from '../../../assets/3D/keyboard/keyboard.glb?url'
import generateKeyDist from './functions/generateKeyDist'



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
  const numberOfKeys:number= 88
  const midiCodeLowest:number = 21
  const { keyType, keyOffset } = generateKeyDist(whiteKeyDist,midiCodeLowest,numberOfKeys)
  const keysPressed = useRef<any>({current:Array(numberOfKeys).fill(false)})



  function setMidiPlay(midiCode:number, state:boolean) {
    keysPressed.current[midiCode] = state
  }

  function handle(e:KeyboardEvent){
    if (e.repeat) {return}
    keysPressed.current = keyboardEvent.getkeyCodePressedRaw()
  }

  useEffect(()=>{
    const keyDown = keyboardEvent.downEventSubscribe(handle)
    const keyUp = keyboardEvent.upEventSubscribe(handle)
    return ()=>{
      keyDown.unsubscribe()
      keyUp.unsubscribe()
    }
  },[])



  return (
    <group position={[-26*whiteKeyDist,0,0]}>

      <Chasis color={color.chasis} model={nodes.Chasis} material={ChasisMaterial}
      position={[-whiteKeyDist/2,0,0]}/>

      {[...Array(numberOfKeys).keys()].map((i)=>

      <Key key={i} ref={keysPressed} setMidiPlay={setMidiPlay} material={keyMaterial}
        midiCode={midiCodeLowest + i}  
        position={[keyOffset[i],0,0]} 
        model={keyType[i] ? nodes.WhiteKey : nodes.BlackKey}
        colors={[keyType[i] ? color.white : color.black ,color.active]}/>
      )}

    </group>
  )
}