
function getText(){
    // get the message from the textarea "message_box"
    let message = document.getElementById("message_box").value;
    console.log(` Text -->${message}<-- / Type of -->${typeof (message)}<-- / Length -->${message.length}<--`);

    return message;
}

function encript(letter){
    if(letter == 'e'){
        return "enter"
    }
    else if(letter == 'i'){
        return "imes"
    }
    else if(letter == 'a'){
        return "ai"
    }
    else if(letter == 'o'){
        return "ober"
    }
    else if(letter == 'u'){
        return "ufat"
    }
    else{
        return String(letter);
    }
}

function dencript(encriptedMessage){
    let index = 0;
    let dencriptedMessage = "";
    let stringLen = encriptedMessage.length;
    
    while(index < stringLen ){
        //string.substring(startIndex, endIndex)

        if(encriptedMessage.substring(index, index+5) == "enter"){ // five letter of the string
            dencriptedMessage += "e";
            index += 5;
        }
        else if(encriptedMessage.substring(index, index+5) == "imes" ){
            dencriptedMessage += "i";
            index += 4;
        }
        else if(encriptedMessage.substring(index, index+4) == "ober" ){
            dencriptedMessage += "o";
            index += 4;
        }
        else if(encriptedMessage.substring(index, index+4) == "ufat" ){
            dencriptedMessage += "u";
            index += 4;
        }
        else if(encriptedMessage.substring(index, index+2) == "ai" ){
            dencriptedMessage += "a";
            index += 2;
        }
        else{
            dencriptedMessage += encriptedMessage.substring(index,index+1);
            index ++;
        }
    }

    return dencriptedMessage;
}

function encriptMessage(){
    let message = getText();
    // split string message into char array
    splitMessgeArray = message.split('');
    // variable to allocate the new encripted messaje
    let encriptedMessage = "";
    for (let index = 0; index < splitMessgeArray.length; index++) {
        encriptedMessage += encript(splitMessgeArray[index]);
    }
    console.log(encriptedMessage);
}

function dencriptMessage(){
    let messageDencripted = dencript(getText());
    console.log(messageDencripted);
}