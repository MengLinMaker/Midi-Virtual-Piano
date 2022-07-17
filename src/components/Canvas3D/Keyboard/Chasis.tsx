export default function Chasis({ material, position, model, color }:any) {
  return(
    <mesh position={position} geometry={model.geometry} castShadow={true}>
      <meshPhysicalMaterial color={color} {...material}/>
    </mesh>
  )
}