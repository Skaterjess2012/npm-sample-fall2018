
class messages {
    constructor(){
        this.messages = [];
        this.getMessages();
    }
    getMessages() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                const responseParsed = JSON.parse(xhttp.responseText);
                this.messages = responseParsed;
                this.displayMessage(this.messages);
            }
        };
        xhttp.open("GET", "http://localhost:3000/messages", true);
        xhttp.send();
    }
    displayMessage() {
        this.messages.forEach(message => {
            let element = document.createElement("li");
            let text = document.createTextNode(message);
            element.appendChild(text);
            document.getElementById('messageList').appendChild(element);
        });
    }
}
let stuff = new messages();