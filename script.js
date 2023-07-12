var imageArray = [
  "img/karambit4.png",
  "img/karambit2.png",
  "img/karambit3.png",
  "img/karambit1.png",
  "img/karambit2.png",
  "img/karambit5.png",
  "img/karambit1.png",
  "img/karambit2.png",
  "img/karambit3.png",
  "img/karambit1.png"
];

let random_check = false;

function spinImage() {
  
  if (!random_check) {
    randomImg();
    random_check = true;
  }
  var container = document.querySelector('.container');
  var slide = document.querySelector('.slide-track');
  slide.classList.add('slide-animation');

  setTimeout(function() {
    slide.classList.remove('slide-animation');
    slide.classList.add('slide-animation2');
  }, 1000);
  
  // Xóa lớp spin-animation sau 3 giây
  setTimeout(function() {
    slide.classList.remove('slide-animation2');
    slide.classList.add('slide-animation3');
  }, 4000);

  setTimeout(function() {
    container.classList.add('blur2');
  }, 5500);

  setTimeout(function() {
    slide.classList.remove('slide-animation3');
    slide.classList.add('slide-animation');
    container.classList.add('blur');
  }, 6000);

  setTimeout(function() {
    slide.classList.remove('slide-animation');
    container.classList.remove('blur');
  }, 7000);

  setTimeout(function() {
    container.classList.remove('blur2');
  }, 7100);
  
  random_check = false; 
  
}

function randomImg() {
  for(let i = 1; i < 11; i++) {
    var audio = document.getElementById("myAudio");
    audio.play();

    var randomIndex = Math.floor(Math.random() * imageArray.length);
    var randomImage = imageArray[randomIndex];
    
    var img_export = "item" + i.toString();
    var imageElement = document.getElementById(img_export);
    imageElement.src = randomImage;

  }
}











