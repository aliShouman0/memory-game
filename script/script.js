const images = document.querySelectorAll(".unknown");
const scoreTag = document.querySelector("#score");
const reset = document.querySelector("#reset");

// index of clicked img
let fistImg = -1;
let secondImg = -1;
let score = 0;
// path of needed img
let photo = [
  "../assets/php.png",
  "../assets/java.png",
  "../assets/js.png",
  "../assets/php.png",
  "../assets/java.png",
  "../assets/js.png",
];

//shuffle photo place
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
photo = shuffle(photo);

// close card if the 2 img no the same
const resetImg = () => {
  images[fistImg].classList.toggle("rotate");
  images[secondImg].classList.toggle("rotate");
  images[fistImg].src = "../assets/unknown.png";
  images[secondImg].src = "../assets/unknown.png";
  fistImg = -1;
  secondImg = -1;
};

const playing = (image, i) => {
  //the index of  clicked card/IMG will be the index of img behind/below the card in the "photo" array that will
  // shuffled always when reset and each img will be exist 2 times in "photo" array
  image.src = photo[i];
  image.classList.toggle("rotate");
  if (fistImg == -1) {
    //if pick one img
    fistImg = i;
  } else {
    // if pick 2 img
    secondImg = i;
    if (photo[secondImg] == photo[fistImg]) {
      score++;
      images[fistImg].removeEventListener("click", images[fistImg].ref);
      images[secondImg].removeEventListener("click", images[secondImg].ref);
      fistImg = -1;
      secondImg = -1;
    } else {
      score--;
      setTimeout(resetImg, 700);
    }
    // score never be negative
    if (score < 0) {
      score = 0;
    }
    scoreTag.textContent = score;
  }
};

// addEventListener for all card/img
images.forEach((image, i) => {
  image.addEventListener(
    "click",
    (image.ref = () => {
      image.classList.toggle("rotate");
      //to keep time for animation
      setTimeout(() => playing(image, i), 500);
    })
  );
});

//reset will reload page readd all events and reset score
reset.addEventListener("click", () => {
  location.reload();
});
