window.onload = function () {
    const wrapper = document.createElement('div');
    const container = document.createElement('div');
    const write = document.createElement('div');
    const textInput = document.createElement('input');
    const sendBtn = document.createElement('button');

    container.className = "container";
    write.className = "write";
    wrapper.className = "wrapper";
    sendBtn.innerHTML = "send";

    const createMessage = () => {
        const div = document.createElement('div');
        div.className = "divMessage";

        div.innerHTML = textInput.value;
        container.insertBefore(div, container.firstChild);
        textInput.value = "";
    }

    const sendMessage = () => {
        if (textInput.value === "")
            return;
        createMessage();
    }
    sendBtn.addEventListener('click', sendMessage);
    textInput.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    document.body.appendChild(wrapper);
    wrapper.appendChild(container);
    wrapper.appendChild(write);
   
    write.appendChild(sendBtn);
 write.appendChild(textInput);
}