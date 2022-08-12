<h1 align="center">
 Create beautiful virtual piano videos!
</h1>

<div align="center">
  <a href="https://menglinmaker-midi-virtual-piano.netlify.app/">
    <img width="100%" src="https://user-images.githubusercontent.com/39476147/180583827-fedcb6ce-e4b0-46ad-99b0-ca66c572d504.gif">
  </a>
</div>

<h1 align="center">
 <a href="https://menglinmaker-midi-virtual-piano.netlify.app/">
 :point_right: Live Demo :point_left:
 </a>
</h1>

<div flex align="center">
<img alt="GitHub" src="https://img.shields.io/github/license/menglinmaker/Midi-Virtual-Piano?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/menglinmaker/Midi-Virtual-Piano?style=flat-square">
<img src="https://img.shields.io/github/workflow/status/menglinmaker/Midi-Virtual-Piano/Continuous Integration?style=flat-square">
<img src="https://img.shields.io/website?down_color=red&down_message=offline&up_color=success&up_message=online&url=https://menglinmaker-midi-virtual-piano.netlify.app/&style=flat-square">
</div>


<div>&nbsp</div>

## Play a song
* **Press a key** - :computer_mouse: Left/Right Click
* **Use your keyboard** - :keyboard: Press

<div>&nbsp</div>

## Navigate scene
* **Rotate** - :computer_mouse: Left Click
* **Drag** - :computer_mouse:	Right Click

<div>&nbsp</div>

## Credit

<div flex align="center">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/react?style=flat-square">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/@react-three/fiber?style=flat-square">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/@react-three/drei?style=flat-square">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/@react-spring/core?style=flat-square">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/rxjs?style=flat-square">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/underscore?style=flat-square">
</div>

Code inspirations and dependencies
* [Meta - React](https://reactjs.org/)
* [vitejs - vite](https://github.com/vitejs/vite)
* [pmndrs - react-three-fiber](https://github.com/pmndrs/react-three-fiber)
* [pmndrs - react-spring](https://github.com/pmndrs/react-spring)
* [iBundi - Open-Web-Piano](https://github.com/iBundin/Open-Web-Piano)

<div align="center">
  <img content="width=device-width, initial-scale=1.0, minimum-scale=0.5" src="https://user-images.githubusercontent.com/39476147/180584949-09eddf65-ad55-429e-9b46-54ea6b6c7d22.gif">
</div>



<div>&nbsp</div><div>&nbsp</div><div>&nbsp</div><div>&nbsp</div><div>&nbsp</div>

# Development Process
## The problem
There are many piano visualisation apps. However, finding a good app has proven to be very difficult and quite a common question. Most visualisers are not 'beautiful' or have good audio quality or none at all. Some apps require payment. Some have a lot of bugs. Some are not cross-platform. Ultimately a visualiser can be used to teach and enhance expression.

<div>&nbsp</div>

## Aim
**To create an app that simplifies the video creation workflow for composers. (specifically for youtube piano composers). User experience is top priority**

**Questions to be answered:**
* What is the fastest workflow?
* Why are certain types of visualisations used?

**Performance measures:**
* Workflow time reduction
* Time spent on app compared to competitors

<div>&nbsp</div>

## Research - 03/07/22
By identifying the strengths and weaknesses of existing apps, we can determine which features can enhance the user experience. One area that was lacking was 3D piano visualisations and aesthetic backgrounds. Most are designed to have pure utility in mind with midi visualisation.

 Competition                                    | Pros                                          | Cons                                                   |
| :-------------------------------------------- |:----------------------------------------------| :------------------------------------------------------|
| [PianoVFX](https://piano-vfx.com/)            | Quality renders. Basic video editing features.| [Buggy to some users (crashes)](https://www.reddit.com/r/piano/comments/fsqyte/i_made_a_piano_visualizer_free_to_download/). Clunky navigation. No Mac and Linux version.             |
| [SeeMusic](https://www.visualmusicdesign.com) | Fast live and faster renders. Video editing capabilities | Has watermark. $99/year for no watermark. No Linux version. |
| [Musescore](https://musescore.org/)           | Youtube integration. Super fast rendering with score   | No control.                                   |
| Manual Video editing                          | tremendous control.                           | Time consuming.                                        |
| Blender                                       | tremendous control. Quality render.           | Time consuming. Slow render.                           |
| [Synthesia](https://synthesiagame.com/)       | Easy to use.                                  | Simple looking. Less customisability.               |

**Desirable Features: most important to least important**
* Cross-platform support - Windows, MacOS, Linux...
* Quality renders + fluid UI
* Keyboard and midi playback
* Live recording
* Video editing capabilities
* Fast renders
* Simple defaults with customisability
* Virtual LED

**User Research Sources - ongoing process**
* Myself - MengLinMaker is a user
* MusicalBasics Discord
* Musescore community
* Reddit

<div>&nbsp</div>

## Development Log - 10/07/22
**Cross Platform Support**

To create an app that allows quick feedback and cross-platform support, a web app is used. This could be hosted for a [live demo on netlify](https://menglinmaker-midi-virtual-piano.netlify.app) for feedback, allowing faster development.

**Maintainability**

[React Js](https://reactjs.org/) allows modular UI components. With a huge developer community, libraries like [React-Three-Fiber](https://github.com/pmndrs/react-three-fiber) can be used to develop 3D graphics in a modular way. This avoids the spaghetti code that often comes with using [Three js](https://threejs.org/) - at least from my experience.

**Beautiful Visualisation**

A 3D model was needed, leading me to learn [Blender](https://www.blender.org/). The final model only features the low poly chassis and a single black and white key, exported as gIFT(glb). These choices were made to reduce the exported file size. To create a responsive, interactive 3D scene, orbit control is enabled.

**Fluid UI**

A custom mouse GUI used to communicate the controls was inspired by the Blender UI. This had plenty of technical challenges due to the need for fluid transitions and image changes. In React, any changes to a UI component via the 'props' will result in a rerender. The CSS cursor styling approach had too many limitations since the cursor image should change with keypress too. Luckily, the MouseEvent listener could be used to create a similar experience with CSS styling. The only way React allows UI changes without 'prop' changes was via CSS or refs. Thus a ref was used in a generic cursor functional component with the ability to add external functions for image changes as required. Maybe this was overkill and unnecessary.

Keyboard keypressed    |    Left mouse click   |    Right mouse click    |
| :------------------- |:----------------------| :-----------------------|
| None                 | Rotate                | Drag                    |
| Ctrl or Shift        | Drag                  | Rotate                  |

<div>&nbsp</div>

## Development Log - 17/07/22
**Managing EventListeners**
One of the challenges with managing events on a virtual keyboard is performance and state management. Normally this would not be a challenge in plain javascript. However, react does not allow you to change states easily without rerenders. External state management libraries appear to have the same updating issue. Custom hooks are also too restrictive since they cannot be used inside another event. The solution that I ended up using was a singleton class with [RXJS](https://rxjs.dev/) with listener subscribers. This allows data to be stored from each event as history, providing additional information not available from a traditional event listener. The single event listener used will drastically reduce the number of event listeners, increasing performance. This can also be used in a scenario where combo keys are needed. In summary, this behaves like a custom event listener.

**3D Animation With Keyboard Controls**
Smooth "key" animations with no choppy rerenders can be done using refs and a physics-based library: [react-spring](https://react-spring.dev/). A ref from the "chassis" component was required for global state management without rerenders. IDs assigned to each key can be used in some functions to pass the state back up to the "chassis" component. Overall, the result is a fluid, uninterrupted animation.

<div>&nbsp</div>

## Development Log - 24/07/22
**Adding Piano Sound**
The traditional approach is to add an mp3 for each pitch. This would result in 88 x 200kb mp3, which is incredibly large. I would like to minimise the website size without sacrificing sound quality. The best approach is to use a few sample pitches to generate the missing pitches. I have tried many libraries: React-sound-font, Midi js, Tone js and sound-font. Unfortunately, there are a lot of bugs and legacy code. The final solution was from [iBundi - Open-Web-Piano](https://github.com/iBundin/Open-Web-Piano). This approach minimised 

**Receiving Feedback**
I have completed the basic sound, visual and controls for this app. Thus, it is a good idea to receive feedback. I have posted my app on some Facebook groups, Reddit and Discord groups. Unfortunately, I have not received much feedback or engagement. I have tried using a poll for engagement. I did get a lot of comments about how fun the app was. So in terms of visuals, sound and interactivity, I have succeeded. Ultimately the question I would like to answer is: "would someone use this app over another?"
