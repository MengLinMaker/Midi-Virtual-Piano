import {keyCodeDictReverse} from "./keyCodeDict";

export default function keyCodeToMidiCode(keyCode:number, baseOctave:number=3) {
  const lowestNote = baseOctave*12 + 12

  let RelativeMidiCode = 'zsxdcvgbhnjm,l.;/'.indexOf(keyCodeDictReverse[keyCode])
  if (RelativeMidiCode >=0 ) return lowestNote + RelativeMidiCode

  RelativeMidiCode = 'q2w3er5t6y7ui9o0p[=]'.indexOf(keyCodeDictReverse[keyCode])
  if (RelativeMidiCode >=0 ) return lowestNote + 12 + RelativeMidiCode
  else return -1
}