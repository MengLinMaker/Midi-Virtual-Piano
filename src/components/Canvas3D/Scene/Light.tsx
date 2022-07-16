import { useHelper } from "@react-three/drei"
import { useRef } from "react"

import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper"



export function KeyLight({ brightness, color }:any) {
  const ref = useRef(null)
  useHelper(ref, RectAreaLightHelper)
  return (
    <rectAreaLight ref={ref}
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      castShadow
    />
  )
}

export function FillLight({ brightness, color }:any) {
  const ref = useRef(null)
  useHelper(ref, RectAreaLightHelper)
  return (
    <rectAreaLight ref={ref}
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      castShadow
    />
  )
}

export function RimLight({ brightness, color }:any) {
  const ref = useRef(null)
  useHelper(ref, RectAreaLightHelper)

  return (
    <rectAreaLight ref={ref}
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[-2, 2, 0]}
      rotation={[0, 180, 0]}
      castShadow
    />
  )
}