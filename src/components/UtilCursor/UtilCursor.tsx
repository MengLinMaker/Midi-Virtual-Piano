import { useRef, useState, useEffect, MutableRefObject } from 'react'
import './UtilCursor.scss'

import rotateIcon from '../../assets/icons/canvas-icons/icons8-3d-rotate-96.png'
import panIcon from '../../assets/icons/canvas-icons/icons8-drag-96.png'


export default function UtilCursor({src}:any) {
  src = rotateIcon
  const cursor:MutableRefObject<any> = useRef(null);
  const cursorIcon:MutableRefObject<any> = useRef(null)

  function cursorMove(e:MouseEvent) {
    cursor.current.style.top = e.pageY + 'px'
    cursor.current.style.left = e.pageX + 'px'
  }

  function cursorDown(e:MouseEvent) {
    if (cursorIcon.current.style.opacity == 0) {
      function updateCursor(imgSrc:string){ 
        cursor.current.style.transform = 'scale(2)'
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

  function cursorUp(e:MouseEvent) {
    cursor.current.style.transform = 'scale(1)'
    cursorIcon.current.style.opacity = 0
  }

  useEffect(()=>{
    document.addEventListener('mousemove',cursorMove)
    document.addEventListener('mousedown',cursorDown)
    document.addEventListener('mouseup',cursorUp)
    return () => {
      document.removeEventListener('mousemove',cursorMove)
      document.removeEventListener('mousedown',cursorDown)
      document.removeEventListener('mouseup',cursorUp)
    }
  }, [cursor])

  return (
    <div ref={cursor} className="utilcursor">
      <img ref={cursorIcon} className="utilcursor-icon" />
    </div>
  )
}