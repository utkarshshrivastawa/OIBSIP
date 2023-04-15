let imageAnim = document.getElementById("image-animate");

let imageArray = [
 "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "Elon-Musk-Quotes.jpg"
]

let imageIndex = 0;

const startImage = () =>{
  imageAnim.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if(imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}

setInterval(startImage,1800);