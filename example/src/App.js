import React from 'react'

import Player from 'react-wavy-audio'
import 'react-wavy-audio/dist/index.css'

const App = () => {
  return <Player
    imageUrl="https://pbs.twimg.com/media/A-lU5FnCcAA1Edi.jpg"
    audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
    waveStyles={{
      cursorWidth: 1,
      progressColor: "#ee3ec9",
      responsive: true,
      waveColor: "#121640",
      cursorColor: "transparent"
    }}
  // zoom={0}
  // waveJson
  // hideImage="true"
  // hideWave="true"
  // containerStyle={}
  />
}

export default App
