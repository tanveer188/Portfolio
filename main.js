console.log('Hello World!');

var menuIcon = document.getElementById('menu-icon');
var body = document.getElementById('body');
var menuItem = document.getElementById('menu-items-container');
const button = document.querySelector('.button');

menuIcon.addEventListener('click', function() {
  menuItem.classList.toggle('active');
  body.classList.toggle("active-body")
  button.classList.toggle('-menu-open');
});

const letters = "abcdefghijklmnopqrstuvwzyz";
let interval = null;

document.querySelectorAll(".menu-item").forEach((element) => {
  element.addEventListener("click",()=>{
  menuItem.classList.toggle('active');
  body.classList.toggle("active-body")
  button.classList.toggle('-menu-open');
  })
  })
  

document.querySelectorAll(".menu-item").forEach((element) => {
  element.onmouseover = (event) => {
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    
      if (iteration >= event.target.dataset.value.length) { 
        clearInterval(interval);
      }
    
      iteration += 1 / 2;
    }, 30);
  };
});
