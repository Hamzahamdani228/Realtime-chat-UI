const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const typing = document.getElementById("typing");

function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg === "") return;

  addMessage(msg, "user");
  messageInput.value = "";

  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";
    botReply();
  }, 1500);
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.innerHTML = `${text}<span class="time">${new Date().toLocaleTimeString()}</span>`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply() {
  const replies = [
    "hello",
    "how are you doing today",
    "I love coding",
    "I love webdevelopment",
    "For frontend",
    "learn",
    "HTML",
    "CSS",
    "Javascript",
    "React js",
    "Nice to meet you ",
    "Can you tell me more?",
    "That's interesting!",
    "I'm here to help ",
    "Sure "
    
    
  ];
  const reply = replies[Math.floor(Math.random() * replies.length)];
  addMessage(reply, "bot");
}
