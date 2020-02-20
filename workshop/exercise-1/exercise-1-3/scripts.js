//StyleSheet
const styles = document.createElement("link");
styles.rel = "stylesheet";
styles.href = "./styles.css";
styles.className = "css";

//HEADER 1
const header1 = document.createElement("h1");
header1.innerText =
  "The best How I Met Your Mother episode (according to fans)";
header1.style.fontFamily = "'Open-Sans', sans-serif";
header1.style.textAlign = "center";

//PARAGRAPH
const paragraph1 = document.createElement("p");
paragraph1.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
paragraph1.style.fontSize = "17px";
paragraph1.style.lineHeight = "1.5em";

//HEADER 2
const header2 = document.createElement("h2");
header2.innerText = "The Slap Bet (Season 2, Episode 9)";
header2.style.textAlign = "left";

//PARAGRAPH 2
const paragraph2 = document.createElement("p");
paragraph2.innerText = "IMDB Rating: 9.5";
paragraph2.style.fontSize = "17px";
paragraph2.style.lineHeight = "1.5em";

//IMAGE
const image = document.createElement("img");
image.src = "./images/robin-sparkles.jpg";
image.alt = "Robin Sparkles";
image.style.border = "#fafafa";
image.style.borderRadius = "4px";
image.style.boxShadow = "4px 4px 14px rgba(128, 128, 128, 0.4)";
image.style.width = "100%";

//PARAGRAPH 3
const paragraph3 = document.createElement("p");
paragraph3.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
paragraph3.style.fontSize = "17px";
paragraph3.style.lineHeight = "1.5em";

//PARAGRAPH 4
const paragraph4 = document.createElement("p");
paragraph4.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
paragraph4.style.fontSize = "17px";
paragraph4.style.lineHeight = "1.5em";

//ANCHOR
const link = document.createElement("a");
link.href =
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
link.innerText = "Source";
link.style.color = "#174e7c";
link.style.display = "block";
link.style.fontWeight = "700";
link.style.marginTop = "auto";
link.style.textAlign = "right";
link.style.textDecoration = "none";

document.querySelector("head").appendChild(styles);
document.querySelector("div").appendChild(header1);
document.querySelector("div").appendChild(paragraph1);
document.querySelector("div").appendChild(header2);
document.querySelector("div").appendChild(paragraph2);
document.querySelector("div").appendChild(image);
document.querySelector("div").appendChild(paragraph3);
document.querySelector("div").appendChild(paragraph4);
document.querySelector("div").appendChild(link);

// header1.className = "h1";
// header2.className = "h2";
// paragraph1.className = "p";
// paragraph2.className = "p";
// paragraph3.className = "p";
// paragraph4.className = "p";
// image.className = "img";
// link.className = "a";
