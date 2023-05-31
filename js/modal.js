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

const modalBookingMini = document.querySelector(".modal-booking-mini");
const overlayBooking = document.querySelector(".overlay-booking");
const openModalBtnBooking = document.querySelectorAll(".btn-modal-booking");
const closeModalBtnBooking = document.querySelector(".btn-close-booking");

const openModalBooking = function () {
    modalBooking.classList.remove("hidden");
    overlayBooking.classList.remove("hidden");
  };

  openModalBtn.forEach(function(btn) {
    btn.addEventListener("click", openModal)});

  const closeModalBooking = function () {
    modalBooking.classList.add("hidden");
    overlayBooking.classList.add("hidden");
  };

  closeModalBtnBooking.addEventListener("click", closeModal);
  overlayBooking.addEventListener("click", closeModal);