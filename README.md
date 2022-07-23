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
<img src="https://img.shields.io/github/license/menglinmaker/Midi-Virtual-Piano">
<img src="https://img.shields.io/github/languages/code-size/menglinmaker/Midi-Virtual-Piano">
<img src="https://img.shields.io/github/workflow/status/menglinmaker/Midi-Virtual-Piano/Continuous Integration">
<img src="https://img.shields.io/netlify/d23c021c-8dc4-45eb-8111-ede377c50326">
<img src="https://img.shields.io/website?down_color=red&down_message=offline&up_color=success&up_message=online&url=https://menglinmaker-midi-virtual-piano.netlify.app/">
</div>




## Play a song
* **Press a key** - :computer_mouse: Left/Right Click
* **Use you keyboard** - :keyboard: Press

## Navigate scene
* **Rotate** - :computer_mouse: Left Click
* **Drag** - :computer_mouse:	Right Click

## Credit

<div flex align="center">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/react">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/@react-three/fiber">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/@react-three/drei">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/@react-spring/core">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/rxjs">
<img src="https://img.shields.io/github/package-json/dependency-version/menglinmaker/Midi-Virtual-Piano/underscore">
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




# Design process

## Aim
**To create an app that simplifies the video creation workflow for composers. (specifically for piano composers).**

**Questions to be answered:**
* What is the fastest workflow?
* Why are certain types of visualisations used?

**Perfromance measures:**
* Workflow time reduction
* Time spent on app compared to competitors

## Research
 Competition                                    | Pros                                          | Cons                                                   |
| :-------------------------------------------- |:----------------------------------------------| :------------------------------------------------------|
| [PianoVFX](https://piano-vfx.com/)            | Quality renders. Basic video editing features.| [Buggy to some users (crashes)](https://www.reddit.com/r/piano/comments/fsqyte/i_made_a_piano_visualizer_free_to_download/). Clunky navigation. No Mac and Linux version.             |
| [SeeMusic](https://www.visualmusicdesign.com) | Fast live and faster renders. Video editing capabilities | Has watermark. $99/year for no watermark. No Linux version. |
| [Musescore](https://musescore.org/)           | Youtube integration. Super fast rendering with score   | No control.                                   |
| Manual Video editing                          | tremendous control.                           | Time consuming.                                        |
| Blender                                       | tremendous control. Quality render.           | Time consuming. Slow render.                           |
| [Synthesia](https://synthesiagame.com/)       | Easy to use.                                  | Simple looking. Less customisability.               |

**Desirable features:**
* Cross platform support - Windows, MacOS, Linux...
* Quality renders
* Live recording
* Video editing capabilities
* Fast renders
* Simple defaults with customisability
* Virtual LED

**User Research Sources:**
* Myself - MengLinMaker is a user
* MusicalBasics Discord
* Musescore community
