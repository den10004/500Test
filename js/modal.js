let headerContainer = document.querySelector(".head-btn-container");
let headerModal = document.querySelector(".header__modal");
let headerModalOpen = document.querySelector(".headerModalOpen");

function openHeaderMenu() {
  headerContainer.classList.toggle("change");
  headerModal.classList.toggle("headerModalOpen");

  /*
  if (ss.style.display === "none") {
    headerModal.style.display = "block";
  } else {
    headerModal.style.display = "none";
  }*/
}

headerContainer.addEventListener("click", openHeaderMenu);
