const portfolio = document.querySelectorAll('.portfolio img');

let currentImg = 200,
    maxImgCount = 10,
    source = 'https://source.unsplash.com/random/200x' + currentImg;

// Works, but produces the same pic all 10 times.
for (i = 0; i < maxImgCount; i++) {
  currentImg++;
  document.querySelector('#img' + currentImg).src = source;
  console.log(currentImg, source);
}
