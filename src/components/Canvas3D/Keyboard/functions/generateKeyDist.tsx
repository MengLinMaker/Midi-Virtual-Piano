export default function generateKeyDist(whiteKeyDist:number = 1, midiCodeLowest:number = 21, numberOfKeys:number = 88){
  const keyTypeLoop:boolean[] = [true,false,true,false,true,true,false,true,false,true,false,true]
  
  const keyType:boolean[] = [...Array(numberOfKeys).keys()].map((i)=>{
      return keyTypeLoop[(midiCodeLowest + i) % 12]
  })

  let keyOffset:number[] = Array(numberOfKeys).fill(0)
  
  for (let i = 1; i < numberOfKeys; i++) {
    if (keyType[i] == true && keyType[i-1] == true) {
      keyOffset[i] = keyOffset[i-1] + whiteKeyDist
    }
    else keyOffset[i] = keyOffset[i-1] + whiteKeyDist*0.5
  }

  return { keyType, keyOffset }
}