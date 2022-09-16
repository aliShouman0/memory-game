const images = document.querySelectorAll(".unknown");
const background = document.querySelector(".bg");
const photo = [
  "assests/php.png",
  "assests/c#.png",
  "assests/c++.png",
  "assests/java.png",
  "assests/js.png",
  "assests/phython.png",
];

images.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("rotate");
    setTimeout(() => {
      image.classList.toggle("d-none");
      background.classList.toggle("d-none");
      background.classList.toggle("rotate2");
    }, 900);

    // image.src = photo[3];
  });
});
