const catImg = document.querySelector('#cat')

catImg.addEventListener("click", (evt) => {
    console.log(evt.target);
});

const catSays = new Audio('../assets/audio/cat.mp3')

catImg.addEventListener("click", (evt) => {
    catSays.volume = 0.1;
    catSays.play();
});

const birdImg = document.querySelector('#bird')

birdImg.addEventListener("click", (evt) => {
    console.log(evt.target);
});

const birdSays = new Audio('../assets/audio/bird.mp3')

birdImg.addEventListener("click", (evt) => {
    birdSays.volume = 0.1;
    birdSays.play();
});

const frogImg = document.querySelector('#frog')

frogImg.addEventListener("click", (evt) => {
    console.log(evt.target);
});

const frogSays = new Audio('../assets/audio/frog.mp3')

frogImg.addEventListener("click", (evt) => {
    frogSays.volume = 0.1;
    frogSays.play();
});

const elephantImg = document.querySelector('#elephant')

elephantImg.addEventListener("click", (evt) => {
    console.log(evt.target);
});

const elephantSays = new Audio('../assets/audio/elephant.mp3')

elephantImg.addEventListener("click", (evt) => {
    elephantSays.volume = 0.5;
    elephantSays.play();
});


const notCatDiv = document.querySelector("#not-cat")

notCatDiv.addEventListener("click", (evt) => {
  if (evt.target.id !== "cat") {
    const audioElement = new Audio(`../assets/audio/${evt.target.id}.mp3`)
    audioElement.volume = .05
    audioElement.play()
  }
})