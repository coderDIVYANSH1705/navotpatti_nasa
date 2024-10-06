document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    // Add message to the chat
    sendButton.addEventListener("click", () => {
        if (chatInput.value.trim() !== "") {
            const message = document.createElement("div");
            message.classList.add("message");
            message.textContent = chatInput.value;
            chatMessages.appendChild(message);
            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll to the bottom
        }
    });

    // Allow Enter key to send messages
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });
});