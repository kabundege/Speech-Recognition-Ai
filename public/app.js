const speech = window.SpeechRecognition || window.webkitSpeechRecognition;
const speaker = new speech();
const btn = document.querySelector('i');
const txt = document.querySelector('h1')

btn.onclick = e => speaker.start()

speaker.onresult = e => {
    const question = e.results[0][0].transcript
    txt.textContent = 'Q : '+question;
    this.answerHanlder(question)
};

answerHanlder = question => {
    const answers = {
        greetings:['good you sonofabitch, and you ?'],
        series:['Suits','Sikings'],
        movies:['soul','tenet']
    }

    const greetings = ['how are you','good morning', 'hi', 'hello','yo'];
    const suggestions = ['movie','serie','tv show'];

    let greetingFound = false;
    let suggestionFound = false
    let answer = null

    for (const greeting of greetings){
        if(question.includes(greeting)){
            greetingFound = true
        }
    }

    for(const suggestion of suggestions){
        if(question.includes(suggestion)){
            suggestionFound = suggestion
        }
    }

    if(greetingFound) {
        answer = answers.greetings[0]
    }else{
        answer = answers[`${suggestionFound}s`][0]
    }

    const res = new SpeechSynthesisUtterance();
    res.text = answer;
    res.volume = 0.8;
    res.rate = 1;
    res.pitch = 1;

    window.speechSynthesis.speak(res);
}