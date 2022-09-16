const images = document.querySelectorAll(".unknown");
const scoreTag = document.querySelector("#score");
let photo = [
  "../assests/php.png",
  "../assests/java.png",
  "../assests/js.png",
  "../assests/php.png",
  "../assests/java.png",
  "../assests/js.png",
];
let fistImg = -1;
let secondImg = -1;
let score = 0;

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

const imgClick = (image, i) => {
  image.classList.toggle("rotate");
  setTimeout(() => playing(image, i), 800);
};

const resetImg = () => {
  images[fistImg].classList.toggle("rotate");
  images[secondImg].classList.toggle("rotate");
  images[fistImg].src = "../assests/unknown.png";
  images[secondImg].src = "../assests/unknown.png";

  fistImg = -1;
  secondImg = -1;
};

const playing = (image, i) => {
  image.src = photo[i];
  image.classList.toggle("rotate");
  if (fistImg == -1) {
    fistImg = i;
  } else {
    secondImg = i;
    if (photo[secondImg] == photo[fistImg]) {
      score++;
      console.log(fistImg, images[fistImg]);
      images[fistImg].removeEventListener("click", images[fistImg].fn);
      images[secondImg].removeEventListener("click", images[secondImg].fn);
      fistImg = -1;
      secondImg = -1;
    } else {
      score--;
      setTimeout(resetImg, 1000);
    }
    if (score < 0) {
      score = 0;
    }
    scoreTag.textContent = score;
  }
};

images.forEach((image, i) => {
  image.addEventListener("click", (image.fn = () => imgClick(image, i)));
});
