/* ******************************************************************************

  Showcase image slideshow.

  16 Feb 2018
  Harry Fahringer III


  TODO: 
    # Showcase images need an opacity transition when changing photos. (CSS) (18 Feb)

********************************************************************************* */


const showcase = document.querySelector('.showcase');
let img = [
      "../img/sc0.jpg",
      "../img/sc1.jpg",
      "../img/sc2.jpg",
      "../img/sc3.jpg"
    ],
    i = 0,
    interval = 5000;

setInterval ( () => {
  
  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }

  showcase.style.backgroundImage = "url('" + img[i] + "')";
  // console.log(img[i]);
  

}, interval);