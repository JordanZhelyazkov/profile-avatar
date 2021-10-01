
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
   const profileElement = document.querySelector('.image');
   profileElement.addEventListener('click', (e) => {
     if(!(e.target.className).includes('.active')){
     e.target.className += '.active';
     }
   });
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
