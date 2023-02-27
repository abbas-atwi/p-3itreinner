let clickMenu = document.querySelector(".menu");
let iconCloseModal = document.querySelector(".closeModal span");
let modal = document.querySelector(".modal-area");
clickMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (modal.style.display === "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
});
iconCloseModal.addEventListener("click", () => {
  if (modal.style.display == "flex") {
    modal.style.display = "none";
  }
});
