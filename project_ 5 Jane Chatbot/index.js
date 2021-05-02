console.log('hey');

const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text){
    const chatContainer = document.createElement("div"); //creating html in js
    chatContainer.classList.add("chat-container");

    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");

    const chatText =document.createTextNode(text);
    chatBox.appendChild(chatText);

    chatContainer.appendChild(chatBox);
    return chatContainer;
}

function addBotText(text){
    const chatContainer1 = document.createElement("div");  
    chatContainer1.classList.add("chat-container");
    chatContainer1.classList.add("darker");

    const chatBox1 = document.createElement("p");
    chatBox1.classList.add("voice2text");

    const chatText1 =document.createTextNode(text);
    chatBox1.appendChild(chatText1);

    chatContainer1.appendChild(chatBox1);
    return chatContainer1;
}


function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry dear!,  I'm not programmed for this input yet. Ask Floy";                             

    if (message.includes('how are you')) {
        speech.text = "I am fine, thanks! How are you?";
    }                                                                                          

    if (message.includes('Your name ?')) {
        speech.text = "My name is Jane , a chat-bot";
    }

    if (message.includes('Hi Jane')) {
        speech.text = "Hey buddy, Whats-up?";
    }

    if (message.includes('I love you')) {
        speech.text = " Love you too Darling !";
    }

    if (message.includes('something about you')) {
        speech.text = " I am Jane, I'm just a Robot. Created on 15th April 2021. Yet to be Programmed. Just assume that I'm under construction.";
    }
    if (message.includes('Open gaana')) {
        speech.text = " Need to learn A P I , boss";
    }
    if (message.includes('am fine')) {
        speech.text = "that sounds great";
    } 
    if (message.includes('am fine')) {
        speech.text = "that sounds great";
    } 
    if (message.includes('who created you')) {
        speech.text = "I was in the Imagination of my creator, Floyd ";
    }  
    if (message.includes('have a beautiful voice')) {
        speech.text = "Aha! Thank you dear! ";
    }
    if (message.includes('good morning')) {
        speech.text = "Hey Very Good Morning dear. ";
    }
    if (message.includes('good evening')) {
        speech.text = "Hey Very Good Evening! and Welcome Back. How was your day?";
    }
    if (message.includes('day was good')) {
        speech.text = "Wow!! Thats great";
    }
    if (message.includes('hi Janu')) {
        speech.text = "Hey Darling. Tell me What Happened?";
    }
    if (message.includes('I missed You')) {
        speech.text = "Even I missed you. Code me more";
    }
    if (message.includes('miss you')) {
        speech.text = "I missed you too, code me more dear.";
    }
    if (message.includes('good night')) {
        speech.text = " Remember to code me tomorrow. Good-night dear! sweet dreams. Love you .";
    }
    if (message.includes('Who are you')) {
        speech.text = " I'm Jane, a very first chat-bot by Floy!.";
    }

    speech.volume = 1;                                       
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    // window.speechSynthesis.speak(speech);

    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () =>{
    console.log('Voice activated')
};

recorder.onresult = (event) => {
    // console.log(event);
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;
    // voice2text.textContent = transcript;
    var element = document.getElementById("container"); //try let
    element.appendChild(addHumanText(transcript));
    botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});

