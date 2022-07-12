import { fromEvent, Observable } from "rxjs";



class MouseEvent {
  #mouseState:any

  #moveEvent:Observable<Event>
  #downEvent:Observable<Event>
  #upEvent:Observable<Event>

  // create event listeners for mouse
  constructor() {
    this.#moveEvent = fromEvent(document, "mousemove");
    this.#downEvent = fromEvent(document, "mousedown");
    this.#upEvent = fromEvent(document, "mouseup");

    this.#moveEvent.subscribe(this.#setMouseState.bind(this))
    this.#downEvent.subscribe(this.#setMouseState.bind(this))
    this.#upEvent.subscribe(this.#setMouseState.bind(this))
  }

  #setMouseState(e:any) {
    this.#mouseState = e
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
const mouseEvent = new MouseEvent
export default mouseEvent