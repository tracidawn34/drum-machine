// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const newSounds = new Audio('sounds/drumBox3.mp3')

let count = 0

const kickDrumBox = document.querySelector('#kick-drum')
const snareDrumBox = document.querySelector('#snare-drum')
const hiHatBox = document.querySelector('#hi-hat')
const tickTockBox = document.querySelector('#tickTock')
const newSoundsBox = document.querySelector('#extraTune')

const kickTiming = document.querySelector('#kickTime')
const snareDrumTiming = document.querySelector('#snareTime')
const hitHatTiming = document.querySelector('#hiHatTime')
const newSoundsTiming = document.querySelector('#extraTuneTime')


// This function is called every 600ms
function update() {
if(count > 4){
    count = 0
} if(count === 4 && tickTockBox.checked){
tock.play()
} else if(tickTockBox.checked) {
tick.play()
}if(kickDrumBox.checked){
 if(Number(kickTiming.value) === count)
kickDrum.play()
} if(snareDrumBox.checked){
    if(Number(snareDrumTiming.value) === count)
snareDrum.play()
} if(hiHatBox.checked){
   if(Number(hitHatTiming.value) === count)
hiHat.play()
} if(newSoundsBox.checked){
    if(Number(newSoundsTiming.value) === count)
    newSounds.play()
}

let currentCount = document.querySelector('#mCount')
currentCount.innerText = count
count ++
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
