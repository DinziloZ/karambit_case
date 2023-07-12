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



function spinImage() {
 
  for(let i = 1; i < 11; i++) {
    var randomIndex = Math.floor(Math.random() * imageArray.length);
    var randomImage = imageArray[randomIndex];
    
    var img_export = "item" + i.toString();
    var imageElement = document.getElementById(img_export);
    imageElement.src = randomImage;

  }

  var slide = document.querySelector('.slide-track');
  slide.classList.add('slide-animation');

  setTimeout(function() { 
    slide.classList.replace('scroll 2s linear infinite;');
  }, 5000);
  
  // Xóa lớp spin-animation sau 3 giây
  setTimeout(function() {
    slide.classList.remove('slide-animation');
    
  }, 8000);

  
}












