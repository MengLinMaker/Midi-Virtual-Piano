import { fromEvent, Observable } from "rxjs";
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
    this.#moveEvent = fromEvent(document, "mousemove").pipe(throttleTime(16))
    this.#downEvent = fromEvent(document, "mousedown").pipe(throttleTime(16))
    this.#upEvent = fromEvent(document, "mouseup").pipe(throttleTime(16))

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
  moveEventSubscribe(eventhandle:any) {
    return this.#moveEvent.subscribe(eventhandle)
  }

  downEventSubscribe(eventhandle:any) {
    return this.#downEvent.subscribe(eventhandle)
  }

  upEventSubscribe(eventhandle:any) {
    return this.#upEvent.subscribe(eventhandle)
  }
}



// Exporting mouseEvent instance. Only one instance is needed.
const mouseEvent = new MouseEventClass
export default mouseEvent