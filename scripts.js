// Get the elements
const container = document.querySelector('.player')
const player = container.querySelector(".player__video")
const button = container.querySelector('.toggle')
const button25 = container.querySelector('.forward')
// Build the functions
let pause = true
function toggle(){
  let status = pause?'play':'pause';
  player[status]();
  button.innerText = pause?'❚ ❚':'►';
  pause = !pause;
}
function blabla(e){
  if (e.keyCode == 32) toggle()
}

function plus25(){
  player.currentTime +=25
}
// Hook up the event listeners
button.addEventListener('click',toggle)
document.addEventListener('keypress',blabla)
button25.addEventListener('click',plus25)
