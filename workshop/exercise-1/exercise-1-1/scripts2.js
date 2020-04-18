const styles = document.createElement("link");

styles.rel = "stylesheet";
styles.href = "./styles.css";
styles.className = "css";
// styles.setAttribute = ("rel", "stylesheet");
// styles.setAttribute = ("href", "./exercise-1-1/styles.css");
// styles.setAttribute = ("class", "css");

document.querySelector("head").appendChild(styles);

//<link rel="stylesheet" href="./exercise-1-1/styles.css" class="css" />
const header1 = document.createElement("h1");
header1.innerText =
  "The best How I Met Your Mother episode (according to fans)";

const paragraph1 = document.createElement("p");
paragraph1.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";

const header2 = document.createElement("h2");
header2.innerText = "The Slap Bet (Season 2, Episode 9)";

const paragraph2 = document.createElement("p");
paragraph2.innerText = "IMDB Rating: 9.5";

const image = document.createElement("img");
image.src = "./images/robin-sparkles.jpg";
image.alt = "Robin Sparkles";

const paragraph3 = document.createElement("p");
paragraph3.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";

const paragraph4 = document.createElement("p");
paragraph4.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";

const link = document.createElement("a");
link.href =
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
link.innerText = "Source";

document.querySelector("div").appendChild(header1);
document.querySelector("div").appendChild(paragraph1);
document.querySelector("div").appendChild(header2);
document.querySelector("div").appendChild(paragraph2);
document.querySelector("div").appendChild(image);
document.querySelector("div").appendChild(paragraph3);
document.querySelector("div").appendChild(paragraph4);
document.querySelector("div").appendChild(link);
