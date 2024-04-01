// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
// Generate chatbot response function
function generateResponse(input) {
  // Add chatbot logic here
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  const currentDate = new Date().toLocaleDateString();
  const currentDay = new Date().toLocaleDateString([], { weekday: 'long' });

  // Custom responses for specific questions
  if (input.toLowerCase().includes("how are you")) {
      return `I'm just a bot, so I don't have feelings, but thank you for asking!`;
  } else if (input.toLowerCase().includes("weather")) {
      return `I'm sorry, I don't have access to real-time weather data. You can check a weather website or app for the current forecast.`;
  } else if (input.toLowerCase().includes("your name")) {
      return `I'm a chatbot designed to assist you with questions and provide information. You can call me ChatGPT.`;
  } else if (input.toLowerCase().includes("time")) {
      return `The current time is ${currentTime}.`;
  } else if (input.toLowerCase().includes("date")) {
      return `Today is ${currentDate}.`;
  } else if (input.toLowerCase().includes("day")) {
      return `Today is ${currentDay}.`;
  } else if (input.toLowerCase().includes("basic")) {
      return `I'm here to help you with basic questions and provide information. Feel free to ask anything!`;
  }else if (input.toLowerCase().includes("thank you")) {
    return `You're welcome! 😊`;
} else if (input.toLowerCase().includes("bye") || input.toLowerCase().includes("goodbye")) {
    return `Goodbye! Have a great day! 👋`;
}else if(input.toLowerCase().includes("hi")){
  return `Welcome you❤️`;
}else if(input.toLowerCase().includes("sasmi")){
  return `she is a second year CSBS Student`;
}
  
  // Default responses
  const responses = [
    "Hello, how can I help you today? 😊",
    "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
    "I'm here to assist you with any questions or concerns you may have. 📩",
    "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
    "What would you like to know? 🤔",
    "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
    "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
    "Is there anything specific you'd like to talk about? 💬",
    "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
    "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
    "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
    "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
  ];
  
  // Return a random response
  return responses[Math.floor(Math.random() * responses.length)];
}
