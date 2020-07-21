const kittenButton = document.querySelector("#kitten_button");
const tokyoButton = document.querySelector("#tokyo_button");
const metalButton = document.querySelector("#metal_button");

function kittenTheme() {
  document.querySelector("body").id = "kittens";
  document.querySelector("h1").textContent = "Kittens";
  document.querySelector("p").textContent =
    "A kitten, also known as a kitty or kitty cat, is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days.";
  console.log("kittensLog");
}
kittenButton.addEventListener("click", kittenTheme);

function tokyoTheme() {
  document.querySelector("body").id = "tokyo";
  document.querySelector("h1").textContent = "Neo Tokyo";
  document.querySelector("p").textContent =
    "The Neo Tokyo aesthetic has permeated some of the biggest films and novels of the last 40 years, including Blade Runner and Akira.";
  console.log("tokyoLog");
}
tokyoButton.addEventListener("click", tokyoTheme);

function metalTheme() {
  document.querySelector("body").id = "metal";
  document.querySelector("h1").textContent = "Heavy Metal";
  document.querySelector("p").textContent =
    "Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.";

  console.log("metalLog");
}
metalButton.addEventListener("click", metalTheme);
