// Preset values
const FROGS = 3;

const track = document.getElementById("track");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
  const lane = document.createElement('li');
  track.appendChild(lane);

  const number = document.createElement('span');
  number.innerText = laneCount;
  lane.appendChild(number);

  lane.id = `lane-${laneCount}`;
}

/**
 * <ol class="track">
 *   <li id="lane-1">
 *    <span>1</span>
 *  </li>
 *  <li id="lane-2">
 *      <span>2</span>
 *   </li>
 *  <li id="lane-3">
 *     <span>3</span>
 *  </li>
 * </ol>
*/

// 2.2.3
const racers = [];

// 2.2.4
for (let x = 0; x < FROGS; x++) {
  // has access to frogStable.js
  const newFrogs = frogStable[x];
  racers.push(newFrogs);


}
// 2.2.5
console.log(racers);


// 2.3.2
racers.forEach((racer, id) => {
  //2.3.4
  const newFrog = document.createElement('span');
  newFrog.innerText = `${racer.number}`;
  newFrog.classList.add('frog');
  // 2.3.5
  newFrog.style.background = racer.color;
  document.getElementById(`lane-${id + 1}`).appendChild(newFrog);

  // 2.3.6
  racers[id].progress = 0;
  racers[id].lane = `frog-${id + 1}`;

  // 2.3.7
  const frogProgress = document.createElement("span");
  frogProgress.id = racers[id].name;
  document.getElementById(`lane-${id + 1}`).appendChild(frogProgress);
})


// 2.4

function racingFrog(racer) {
  let progress = racer.progress;  // takes the progess that we have injected into racer in 2.3.6
  const trackWidth = track.offsetWidth; // takes the width of the whole span 

  const hopLength = (Math.floor(Math.random() * 100) / trackWidth * 100); // random hop length

  const bounce = setInterval(function () {
    progress += hopLength;

    if (progress > 100) {
      // if progress is more than 100%, sets progress to 100.1 and console.log's the racers name, that they have finished and that they would stop bouncing
      progress = 100.1;
      console.log(racer.name, ' has finished!');
      clearInterval(bounce);
    }
    console.log(racer);
    document.querySelector(`${racer.lane} .frog`).style.left = `${progress}%`;
  }, Math.random() * 1000);
}

// this will initiate the race
racers.forEach(function (racer) {
  racingFrog(racer);
});