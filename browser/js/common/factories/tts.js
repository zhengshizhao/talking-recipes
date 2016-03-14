app.factory('ttsFactory', function($window){
        return { 
            speak: function speak(text, callback) {
                var u = new $window.SpeechSynthesisUtterance();
                //var voices = window.speechSynthesis.getVoices();
                u.text = text;
                u.lang = 'en-US';
                //u.voice =voices[1];
                u.volume = 1; // 0 to 1
                u.rate = 1; // 0.1 to 10
                u.pitch = 1; //0 to 2
             
                u.onend = function () {
                    if (callback) {
                        callback();
                    }
                };
             
                u.onerror = function (e) {
                    if (callback) {
                        callback(e);
                    }
                };
             
                $window.speechSynthesis.speak(u);
            }
        }
})