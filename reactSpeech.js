import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return(
    $('#startRecord').on('click', function(e) {
      //call this onclick of start button. Need continuous or it'll stop listening when user stops speaking.
      SpeechRecognition.startListening({ continuous: true });

  });
    $('#stopRecord').on('click', function(e) {
      //asynchronous. Will finish processing speech recorded up until onClick
      SpeechRecognition.stopListening();
    });
}
export default Dictaphone;

/* stuff to show if not supported on the user's browser
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      Render some fallback content
     }*/
