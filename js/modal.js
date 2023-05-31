const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll(".btn-modal");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  openModalBtn.forEach(function(btn) {
    btn.addEventListener("click", openModal)});

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);