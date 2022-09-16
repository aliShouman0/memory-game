const images = document.querySelectorAll(".unknown");
const background = document.querySelector(".bg");
let photo = [
  "../assests/php.png",
  "../assests/java.png",
  "../assests/js.png",
  "../assests/php.png",
  "../assests/java.png",
  "../assests/js.png",
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
photo = shuffle(photo);

console.log(photo);
images.forEach((image, i) => {
  image.addEventListener("click", () => {
    image.classList.toggle("rotate");
    setTimeout(() => {
      image.src = photo[i];
      console.log(photo[i-1],i);
      image.classList.toggle("rotate");
    }, 800);
  });
});
