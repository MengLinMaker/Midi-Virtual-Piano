import { MutableRefObject } from 'react'



// Revert to default cursor
export function cursorUp(e:MouseEvent, cursor:MutableRefObject<any>, cursorIcon:MutableRefObject<any>) {
  cursor.current.style.transform = 'translate(-50%,-50%) scale(1)'
  cursorIcon.current.style.opacity = 0
}