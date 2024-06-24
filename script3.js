var message = document.querySelector("#message");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = "Recognised speech: " + command;
    
};
recognition.onspeechend = function () {
    recognition.stop();
};

document
    .querySelector("#command-button")
    .addEventListener("click", function () {
        recognition.start();
    });