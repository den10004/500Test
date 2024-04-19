let headerContainer = document.querySelector(".head-btn-container");
let headerModal = document.querySelector(".header__modal");
let headerModalOpen = document.querySelector(".headerModalOpen");
let contactModalOpen = document.querySelectorAll(".contact-modal-open");
let contactModal = document.querySelector("#contactOpen");
let contactCloseBtn = document.querySelector("#contact-close-btn");
let modal = document.querySelector(".modal");

function openHeaderMenu() {
  headerContainer.classList.toggle("change");
  headerModal.classList.toggle("headerModalOpen");
}

function closeContactModal() {
  contactModal.style.display = "none";
  document.body.style.overflow = "visible";
}

headerContainer.addEventListener("click", openHeaderMenu);
contactCloseBtn.addEventListener("click", closeContactModal);

contactModalOpen.forEach((e) => {
  e.addEventListener("click", () => {
    contactModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    closeContactModal();
  }
});
