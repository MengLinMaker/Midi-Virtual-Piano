import { Sky, Sparkles, Stars } from "@react-three/drei";
import { useMemo } from "react";

export default function Background() {
  const size = 5, amount = 80

  const sizes = useMemo(() => {
    return new Float32Array( Array.from({ length: amount }, () => Math.random() * size) )
23  }, [size, amount])

  return (
    <>
      <Sky distance={5} azimuth={0.75} inclination={0.6} />
      <Sparkles scale={[3,3,3]} opacity={0.6} size={sizes} speed={0.5} color="white" count={amount} />
      <Stars radius={5} depth={50} count={160} factor={5} fade speed={0.5} />
    </>
  )
}