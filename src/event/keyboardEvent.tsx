import { delay, fromEvent } from "rxjs";


// Singleton class for keyboardEvent with one way data
class keyboardEventClass {
  static #instantiated:boolean = false

  #keyboardState:any = false
  #keyCodePressed:boolean[] = new Array(255).fill(false)

  #keydownEvent:any
  #keyupEvent:any

  // create event listeners for keyboard
  constructor() {
    if (keyboardEventClass.#instantiated) {
      throw "KeyboardEvent class already instantiated"
    }
    keyboardEventClass.#instantiated = true

    this.#keydownEvent = fromEvent(document, "keydown")
    this.#keyupEvent = fromEvent(document, "keyup")

    this.#keydownEvent.subscribe(this.#keydownEventHandle.bind(this))
    this.#keyupEvent.subscribe(this.#keyupEventHandle.bind(this))

    //this.#keydownEvent = this.#keydownEvent.pipe(delay(1))
    //this.#keyupEvent = this.#keyupEvent.pipe(delay(1))
  }

  #keydownEventHandle(e:KeyboardEvent) {
    if (e.repeat) {return}
    this.#setKeyboardState(e)
    this.#keyCodePressed[e.keyCode] = true
  }

  #keyupEventHandle(e:KeyboardEvent) {
    this.#setKeyboardState(e)
    this.#keyCodePressed[e.keyCode] = false
  }

  #setKeyboardState(e:KeyboardEvent) {
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

  getkeyCodePressedRaw() {
    return this.#keyCodePressed
  }

  getKeyboardState() {
    return this.#keyboardState
  }

  // Making event susbcribers
  downEventSubscribe(eventhandle:Function) {
    return this.#keydownEvent.subscribe(eventhandle)
  }

  upEventSubscribe(eventhandle:Function) {
    return this.#keyupEvent.subscribe(eventhandle)
  }
}



// Exporting mouseEvent instance. Only one instance is needed.
const keyboardEvent = new keyboardEventClass
export default keyboardEvent