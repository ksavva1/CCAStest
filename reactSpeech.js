import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone

/* stuff to show if not supported on the user's browser
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      Render some fallback content
     }*/

//call this onclick of start button. Need continuous or it'll stop listening when user stops speaking.
SpeechRecognition.startListening({ continuous: true })

//call this onclick of stop button
SpeechRecognition.stopListening()

/*
To make the microphone transcript available in your component, add:
const { transcript } = useSpeechRecognition() */
