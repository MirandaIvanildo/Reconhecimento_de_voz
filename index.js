function iniciar() {
    if(window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'pt-BR';
        recognition.start();

        recognition.onresult = function(e) {
            document.getElementById('texto').value = e.results[0] [0].transcript;
        }
    } else {
        alert('Navegador incompativel')
    }
}