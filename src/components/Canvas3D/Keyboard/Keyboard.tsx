import { useGLTF } from '@react-three/drei'
import pianoModel from '../../../assets/3D/keyboard/keyboard.glb?url'
import Key from './Key'
import Chasis from './Chasis'
import { useEffect, useRef } from 'react'
import keyboardEvent from '../../../event/keyboardEvent'



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
  const keyTypeLoop:boolean[] = [true,false,true,false,true,true,false,true,false,true,false,true]
  const keysPressed = useRef<any>({current:Array(88).fill(false)})

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

  function setMidiPlay(midiCode:number, state:boolean) {
    keysPressed.current[midiCode] = state
  }



  return (
    <group position={[-26*whiteKeyDist,0,0]}>
      <Chasis color={color.chasis} material={ChasisMaterial} position={[-whiteKeyDist/2,0,0]}
      model={nodes.Chasis}/>

      
    {[...Array(52).keys()].map((i)=>
    <Key key={i} ref={keysPressed} midiCode={i+65} setMidiPlay={setMidiPlay} position={[whiteKeyDist*i,0,0]} 
      material={keyMaterial} model={nodes.WhiteKey} colors={[color.white,color.active]}/>
     )}

    </group>
  )
}