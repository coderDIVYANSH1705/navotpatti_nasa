document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return; // Avoid sending empty messages

    displayMessage(userInput, 'user-message');
    document.getElementById('user-input').value = "";

    // Simple predefined responses
    let botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot-message');
}

function displayMessage(message, className) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Simple chatbot logic
function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (userInput.includes("exoplanet")) {
        return "Exoplanets are planets that orbit a star outside our solar system. Fascinating, right?";
    } else if (userInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I don't understand that. Can you try asking something else?";
    }
}
