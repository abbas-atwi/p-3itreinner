let menu = document.querySelector(".menu");
let iconCloseModal = document.querySelector(".iconCloseModal");
menu.addEventListener("click", () => {
  let modal = document.querySelector(".modal-area");
  if (modal.style.display == "none") {
    modal.style.display = "flex";
    modal.style.transition = "all 1s ease";
  } else {
    modal.style.display = "none";
  }
});
iconCloseModal.addEventListener("click", () => {
  let modal = document.querySelector(".modal-area");
  modal.style.display = "none";
});
