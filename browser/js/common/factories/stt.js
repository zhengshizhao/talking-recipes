app.factory('sttFactory', function($window){
  return { 
    recognition: new $window.webkitSpeechRecognition(),
    init: function(){
        //var recognizing;
        //var recognition = new $window.webkitSpeechRecognition();

        recognition.continuous = true;
        reset();
        recognition.onend = reset;
        
        recognition.onresult = function (event) {
          for (var i = resultIndex; i < event.results.length; ++i) {
            if (event.results.final) {
              textarea.value += event.results[i][0].transcript;
            }
          }
        }
      }
      // reset: function (recognizing) {
      //    recognizing = !recognizing;
      //    return recognizing;
      //      //button.innerHTML = "Click to Speak";
      // },
      // toggleStartStop: function(recognizing) {
      //     if (recognizing) {
      //       recognition.stop();
      //       reset();
      //     } else {
      //       recognition.start();
      //       recognizing = true;
      //       //button.innerHTML = "Click to Stop";
      //     }
      //   }
        //return recognition;     
  }
})