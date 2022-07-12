import { MutableRefObject } from 'react'



// Set custom cursor position to mouse position
export function cursorMove(e:any, cursor:MutableRefObject<any>) {
  cursor.current.style.top = e.y + 'px'
  cursor.current.style.left = e.x + 'px'
}