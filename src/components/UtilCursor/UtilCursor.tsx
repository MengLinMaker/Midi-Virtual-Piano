import { useRef, useEffect, MutableRefObject } from 'react'
import './UtilCursor.scss'
import { cursorMove, cursorDown, cursorUp } from './functions'

import mouseEvent from '../../event/mouseEvent'



export default function UtilCursor() {
  const cursor:MutableRefObject<any> = useRef(null);
  const cursorIcon:MutableRefObject<any> = useRef(null)

  useEffect(()=>{
    const cursorMoveSuscriber = mouseEvent.moveEventSubscribe( (e:any)=>cursorMove(e,cursor) )
    const cursorDownSuscriber = mouseEvent.downEventSubscribe( (e:any)=>cursorDown(e,cursor,cursorIcon) )
    const cursorUpSuscriber = mouseEvent.upEventSubscribe( (e:any)=>cursorUp(e,cursor,cursorIcon) )
    return () => {
      cursorMoveSuscriber.unsubscribe()
      cursorDownSuscriber.unsubscribe()
      cursorUpSuscriber.unsubscribe()
    }
  }, [cursor])

  return (
    <div ref={cursor} className="utilcursor">
      <img ref={cursorIcon} className="utilcursor-icon" />
    </div>
  )
}