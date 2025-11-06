const frames = [
  "../image/waterfall/1.png",
  "../image/waterfall/2.png",
  "../image/waterfall/3.png",
  "../image/waterfall/4.png",
  "../image/waterfall/5.png",
  "../image/waterfall/6.png",
  "../image/waterfall/7.png",
  "../image/waterfall/8.png",
  "../image/waterfall/9.png",
  "../image/waterfall/10.png",
  "../image/waterfall/11.png"

]; 

let current = 0;
const img = document.getElementById("waterfall");

// changing the image after 100ms ( = 1s changing 10 images)
setInterval(() => {
  current = (current + 1) % frames.length;
  img.src = frames[current];
}, 100); 


const messages = [
  "Welcome to the waterfall animation!",
  "Click 'Next' to see more messages.",
  "This is a cloud-shaped text box ",
  "It stays cute and responsive!",
  "You can put it above your animation too"
];

let index = 0;
const text = document.getElementById("text");
const next = document.getElementById("cloudText");

next.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  text.textContent = messages[index];
});
