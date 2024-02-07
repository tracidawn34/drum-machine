// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
let count = 0

const kickDrumBox = document.querySelector('#kick-drum')
const snareDrumBox = document.querySelector('#snare-drum')
const hiHatBox = document.querySelector('#hi-hat')
const tickTockBox = document.querySelector('#tickTock')

// This function is called every 600ms
function update() {
if(count % 4 === 0){
tock.play()
}else{
    // Play the 'tick' sound
    tick.play()
}
count ++
let currentCount = document.querySelector('#mCount')
currentCount.innerText = `${count % 4}`
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
