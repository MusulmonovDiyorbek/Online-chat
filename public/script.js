const loginScreen = document.getElementById('login-screen');
const chatScreen = document.getElementById('chat-screen');
const usernameInput = document.getElementById('username');
const loginBtn = document.getElementById('login-btn');
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');

let username = "";
loginBtn.addEventListener('click', () => {
  username = usernameInput.value.trim();
  if (username) {
    loginScreen.style.display = 'none';
    chatScreen.style.display = 'block';
  } else {
    alert('Please enter a username!');
  }
});

sendBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    const timestamp = new Date().toLocaleTimeString();
    displayMessage(username, message, timestamp);
    messageInput.value = '';
  }
});
function displayMessage(sender, message, time) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}</strong> (${time}): ${message}`;
  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}