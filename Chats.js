const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');

function sendMessage() {
  const msg = chatInput.value.trim();
  if (msg === '') return;
  
  // mostrar a mensagem do utilizador
  chatOutput.innerHTML += `
    <p>${msg}</p>
  `;
  
  chatInput.value = '';
}
