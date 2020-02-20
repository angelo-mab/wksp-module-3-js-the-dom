// Preset values
const FROGS = 3;
const track = document.getElementById("track");
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (i = 1; i <= FROGS; i++) {
  // 2. Create li
  let lane = document.createElement("li");
  track.appendChild(lane);

  // 3. Create span and add it to the li
  let span = document.createElement("span");
  span.innerText = i;
  lane.appendChild(span);

  // 4. Assign an id to each lane
  //lane creation phase
  lane.id = "lane-" + i;
}

let racers = [];

for (let i = 0; i < FROGS; i++) {
  const newRacers = frogStable[i];
  racers.push(newRacers);
}
console.log(racers);


