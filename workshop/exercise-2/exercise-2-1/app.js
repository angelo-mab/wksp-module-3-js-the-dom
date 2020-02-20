// Preset values
const FROGS = 3;
const track = document.getElementById("track");
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (i = 1; i <= FROGS; i++) {
  // 2. Create li
  let lane = document.createElement("li");
  track.appendChild(lane);

  let span = document.createElement("span");
  span.innerText = i;
  lane.appendChild(span);
  lane.id = "lane-" + i;
}

// 3. Create span and add it to the li

// 4. Assign an id to each lane
