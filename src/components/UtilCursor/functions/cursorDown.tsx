import { MutableRefObject } from 'react'

import rotateIcon from '../../assets/icons/canvas-icons/icons8-3d-rotate-96.png'
import panIcon from '../../assets/icons/canvas-icons/icons8-drag-96.png'



// Custom image forspecial cursor condition
export function cursorDown(e:any, cursor:MutableRefObject<any>, cursorIcon:MutableRefObject<any>) {
  if (cursorIcon.current.style.opacity == 0) {

    function updateCursor(imgSrc:string){
      cursor.current.style.transform = 'translate(-50%,-50%) scale(2)'
      cursorIcon.current.style.opacity = 1
      cursorIcon.current.src = imgSrc
    }

    switch (e.button) {
      case 0:
        updateCursor(rotateIcon)
        break
      case 2:
        updateCursor(panIcon)
        break
        
    }
  }
}