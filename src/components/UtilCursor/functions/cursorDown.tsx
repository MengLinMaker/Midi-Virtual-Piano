import { MutableRefObject } from 'react'

import rotateIcon from '../../../assets/icons/canvas-icons/icons8-3d-rotate-96.png'
import panIcon from '../../../assets/icons/canvas-icons/icons8-drag-96.png'

import keyboardEvent from '../../../event/keyboardEvent'



// Custom image forspecial cursor condition
export function cursorDown(e:any, cursor:MutableRefObject<any>, cursorIcon:MutableRefObject<any>) {
  if (cursorIcon.current.style.opacity == 0) {
    console.log(keyboardEvent.getkeyCodePressed())
    //const temp = keyboardEvent.getKeyboardState()
    //if (temp) console.log(temp.type)
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