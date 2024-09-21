onload = () =>{
        document.body.classList.remove("container");
};
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.position = 'absolute';

  heart.style.animation = 'float 5s linear forwards';

    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.bottom = '0';

    heartsContainer.appendChild(heart);

  
  setTimeout(() => {
    heart.remove();
  }, 5000); 
}


setInterval(createHeart, 1000); 
