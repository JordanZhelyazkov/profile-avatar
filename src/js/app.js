
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
   const profileElement = document.querySelector('.profile');
   profileElement.addEventListener('click', (e) => {
     e.target.className += '.active';
   });
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
