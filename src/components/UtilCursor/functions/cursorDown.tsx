import { MutableRefObject } from 'react'

import rotateIcon from '../../../assets/icons/canvas-icons/icons8-3d-rotate-96.png'
import panIcon from '../../../assets/icons/canvas-icons/icons8-drag-96.png'



// Custom image forspecial cursor condition
export function cursorDown(e:MouseEvent, cursor:MutableRefObject<any>, cursorIcon:MutableRefObject<any>) {
  if (cursorIcon.current.style.opacity == 0) {
    function updateCursor(imgSrc:string = ''){
      cursor.current.style.transform = 'translate(-50%,-50%) scale(2)'
      cursorIcon.current.style.opacity = 1
      cursorIcon.current.src = imgSrc
    }

    const modifiedKeyState = e.ctrlKey || e.shiftKey
    if (modifiedKeyState == false) {
      if (e.button == 0) updateCursor(rotateIcon)
      if (e.button == 2) updateCursor(panIcon)
    } else {
      if (e.button == 2) updateCursor(rotateIcon)
      if (e.button == 0) updateCursor(panIcon)
    }
  }
}