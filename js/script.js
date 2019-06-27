var button = document.querySelector(".find-hotel-button");
var popup = document.querySelector(".modal");

button.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle("modal-show");
   popup.classList.remove("modal-error");
});

var form = document.querySelector(".hotel-form");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");

form.addEventListener("submit", function (evt) {
   if (!input1.value || !input2.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
   }
});