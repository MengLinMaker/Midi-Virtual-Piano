import { fromEvent } from "rxjs";
import { throttleTime } from 'rxjs/operators';


class MouseEventClass {
  static #instantiated:boolean = false

  #mouseState:any

  #moveEvent:any
  #downEvent:any
  #upEvent:any

  // create event listeners for mouse
  constructor() {
    if (MouseEventClass.#instantiated) {
      throw "MouseEvent class already instantiated"
    }
    MouseEventClass.#instantiated = true
    const throttle = 10;
    this.#moveEvent = fromEvent(document, "mousemove",{passive: true}).pipe(throttleTime(throttle))
    this.#downEvent = fromEvent(document, "mousedown",{passive: true}).pipe(throttleTime(throttle))
    this.#upEvent = fromEvent(document, "mouseup",{passive: true}).pipe(throttleTime(throttle))

    this.#moveEvent.subscribe(this.#setMouseState.bind(this))
    this.#downEvent.subscribe(this.#setMouseState.bind(this))
    this.#upEvent.subscribe(this.#setMouseState.bind(this))
  }

  #setMouseState(e:MouseEvent) {
    this.#mouseState = {
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      movementX: e.movementX,
      movementY: e.movementY,
      timeStamp: e.timeStamp,
      type: e.type,
      x: e.x,
      y: e.y,
    }
  }

  getMouseState() {
    return this.#mouseState
  }

  // Making event susbcribers
  moveEventSubscribe(eventhandle:Function) {
    return this.#moveEvent.subscribe(eventhandle)
  }

  downEventSubscribe(eventhandle:Function) {
    return this.#downEvent.subscribe(eventhandle)
  }

  upEventSubscribe(eventhandle:Function) {
    return this.#upEvent.subscribe(eventhandle)
  }
}



// Exporting mouseEvent instance. Only one instance is needed.
const mouseEvent = new MouseEventClass
export default mouseEvent