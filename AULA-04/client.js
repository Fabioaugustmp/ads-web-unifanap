const socket = io();

const usernameInput = document.querySelector('#username');
const messageInput = document.querySelector('#message');
const sendButton = document.querySelector('#send');

sendButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const message = messageInput.value;
    const data = `${username}: ${message}`;
  
    socket.emit('chat message', data);
    messageInput.value = '';
  });