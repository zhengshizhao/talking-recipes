
    // speak('Jon likes Iced Tea!');
     
    // say a message
function speak(text, callback) {
        var u = new SpeechSynthesisUtterance();
        u.text = text;
        u.lang = 'en-US';

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
     
        speechSynthesis.speak(u);
}

// ask('What is your favorite color?', function (err, result) {
//     console.log("result", result.transcript );
//     if (result && result.transcript == 'blue') {
//         speak('Right!');
//     } else {
//         speak('Wrong!');
//     }
// });
 

 
// ask a question and get an answer
// function ask(text, callback) {
//     // ask question
//     speak(text, function () {
//     if (!('webkitSpeechRecognition' in window)) {
//         upgrade();
//     } 
//         // get answer
//         var recognition = new webkitSpeechRecognition();
//         recognition.continuous = false;
//         recognition.interimResults = false;
 
//         recognition.onend = function (e) {
//             if (callback) {
//                 callback('no results');
//             }
//         };
 
 
//         recognition.onresult = function (e) {
//             // cancel onend handler
//             recognition.onend = null;
//             if (callback) {
//                 callback(null, {
//                     transcript: e.results[0][0].transcript,
//                     confidence: e.results[0][0].confidence
//                 });
//             }

//         }
 
//         // start listening
//        //recognition.start();
//         // recognition.onresult = respond;
//         // recognition.onend = function(event) { console.log(event) };
//     });
// }
