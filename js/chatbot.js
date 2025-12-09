const chatbot = {
    isOpen: false,

    toggle() {
        const container = document.getElementById('chatbot-container');
        const icon = container.querySelector('.toggle-icon i');

        if (this.isOpen) {
            container.classList.add('chatbot-collapsed');
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            container.classList.remove('chatbot-collapsed');
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
        this.isOpen = !this.isOpen;
    },

    sendMessage() {
        const input = document.getElementById('chat-input-field');
        const message = input.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        // Simulate bot thinking
        setTimeout(() => {
            this.botResponse(message);
        }, 1000);
    },

    addMessage(text, sender) {
        const messagesDiv = document.getElementById('chat-messages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerText = text;
        messagesDiv.appendChild(msgDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    },

    botResponse(userMsg) {
        const msg = userMsg.toLowerCase();
        let response = "I'm sorry, I didn't understand that. You can ask me about booking flights, trains, or buses.";

        if (msg.includes('hello') || msg.includes('hi')) {
            response = "Hello! Welcome to TripEasy. How can I assist you with your travel plans today?";
        } else if (msg.includes('book') || msg.includes('flight') || msg.includes('train') || msg.includes('bus')) {
            response = "You can easily book tickets using the search widget on our home page. Just select your mode of transport, enter details, and click Search!";
        } else if (msg.includes('cancel') || msg.includes('refund')) {
            response = "To cancel a booking, please visit the 'My Trips' section (coming soon) or contact our support hotline.";
        } else if (msg.includes('price') || msg.includes('cost')) {
            response = "Our prices are very competitive! Search for a specific route to see the exact fares.";
        } else if (msg.includes('contact') || msg.includes('help')) {
            response = "You can reach our 24/7 support team at support@tripeasy.com or call 1800-TRIP-EASY.";
        }

        this.addMessage(response, 'bot');
    }
};

// Allow pressing Enter to send
document.getElementById('chat-input-field')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        chatbot.sendMessage();
    }
});
