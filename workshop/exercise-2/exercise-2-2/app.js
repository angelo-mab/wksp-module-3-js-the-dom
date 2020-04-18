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

  lane.id = `lane-${laneCount + 1}`;
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
  // 2.2.5
  console.log(newFrogs);
}
