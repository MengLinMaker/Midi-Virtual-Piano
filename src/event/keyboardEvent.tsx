import { fromEvent, Observable } from "rxjs";



class keyboardEventClass {
  static #instantiated:boolean = false

  #keyboardState:any
  #keyCodePressed:boolean[] = new Array(255).fill(false)

  #keydownEvent:Observable<Event>
  #keyupEvent:Observable<Event>

  // create event listeners for keyboard
  constructor() {
    if (keyboardEventClass.#instantiated) {
      throw "keyboardEvent class already instantiated"
    }
    keyboardEventClass.#instantiated = true

    this.#keydownEvent = fromEvent(document, "keydown");
    this.#keyupEvent = fromEvent(document, "keyup");

    this.#keydownEvent.subscribe(this.#keydownEventHandle.bind(this))
    this.#keyupEvent.subscribe(this.#keyupEventHandle.bind(this))
  }

  #keydownEventHandle(e:any) {
    if (this.#keyCodePressed[e.keyCode] == false) {
      this.#setKeyboardState(e)
      this.#keyCodePressed[e.keyCode] = true
    }
  }

  #keyupEventHandle(e:any) {
    this.#setKeyboardState(e)
    this.#keyCodePressed[e.keyCode] = false
  }

  #setKeyboardState(e:any) {
    this.#keyboardState = {
      key: e.key,
      keyCode: e.keyCode,
      timeStamp: e.timeStamp,
      type: e.type,
    }
  }

  getkeyCodePressed() {
    return this.#keyCodePressed.flatMap((keyPressed, keyCode) => keyPressed ? keyCode : [])
  }

  getKeyboardState() {
    return this.#keyboardState
  }

  // Making event susbcribers
  downEventSubscribe(eventhandle:any) {
    return this.#keydownEvent.subscribe(eventhandle)
  }

  upEventSubscribe(eventhandle:any) {
    return this.#keyupEvent.subscribe(eventhandle)
  }
}



// Exporting mouseEvent instance. Only one instance is needed.
const keyboardEvent = new keyboardEventClass
export default keyboardEvent