// DOM Elements
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const quickPrompts = document.querySelectorAll('.quick-prompt');

// Sample responses (in a real app, you'd use an API)
const sampleResponses = {
    "weather": "The weather today is sunny with a high of 28°C. Perfect day to go outside!",
    "fun fact": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat!",
    "quantum computing": "Quantum computing uses quantum bits or qubits which can exist in multiple states at once (unlike regular bits that are either 0 or 1). This allows quantum computers to solve certain problems much faster than classical computers."
};

// Quick prompt selection
quickPrompts.forEach(prompt => {
    prompt.addEventListener('click', function() {
        userInput.value = this.textContent.trim().replace(/"/g, '');
        userInput.focus();
    });
});

// Send button click handler
sendBtn.addEventListener('click', processMessage);

// Handle Enter key in input field
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        processMessage();
    }
});

function processMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Display user message
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    
    // Show loading indicator
    const loadingId = addMessage('', 'ai', true);
    
    // Simulate API response delay
    setTimeout(() => {
        // Remove loading indicator
        document.getElementById(loadingId).remove();
        
        // Generate response
        const response = generateResponse(message);
        addMessage(response, 'ai');
    }, 1000);
}

function generateResponse(message) {
    // Simple response logic - in a real app you'd call an API
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('weather')) {
        return sampleResponses["weather"];
    } else if (lowerMsg.includes('fun fact')) {
        return sampleResponses["fun fact"];
    } else if (lowerMsg.includes('quantum')) {
        return sampleResponses["quantum computing"];
    } else {
        return `I understand you're asking about "${message}". In a real implementation, this would connect to an AI API for a proper response. This is a demo interface showing how the chat would work.`;
    }
}

function addMessage(text, sender, isLoading = false) {
    const messageDiv = document.createElement('div');
    
    if (isLoading) {
        messageDiv.innerHTML = `
            <div class="ai-message">
                <div class="loading-dots">
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                </div>
            </div>
        `;
        messageDiv.id = 'loading-' + Date.now();
    } else if (sender === 'user') {
        messageDiv.innerHTML = `
            <div class="user-message">
                <p>${text}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="ai-message">
                <p>${text}</p>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    messageDiv.scrollIntoView({ behavior: 'smooth' });
    return messageDiv.id;
}
