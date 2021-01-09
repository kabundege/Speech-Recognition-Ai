let stream,recorder,chunks=[];
const data = [];

onload = e => {
    navigator.mediaDevices.getUserMedia({audio:true})
    .then(stream =>{
        const mediaRecorder = new MediaRecorder(stream);

        recorder = mediaRecorder;
        
        mediaRecorder.ondataavailable = function(e) {
            console.log("recieved data ",e.data);
            chunks.push(e.data);
        }

        mediaRecorder.onstop = e => {
            console.log("ended with data ",chunks);
            const blob = new Blob(chunks,{'type' : 'audio/ogg; codecs=opus' });
            const url = URL.createObjectURL(blob);
            document.querySelector('audio').src = url;    
            const audio = new Audio();
            audio.c
        }
    }).catch(err => console.log("an Error occured ",err));
}

document.querySelectorAll('button')[0].onclick = e => {
    console.log("started record");
    recorder.start();
}

document.querySelectorAll('button')[1].onclick = e => {
    console.log("Ended record");
    recorder.stop();
}