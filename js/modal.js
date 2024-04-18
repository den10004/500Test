let headerContainer = document.querySelector(".head-btn-container");
let headerModal = document.querySelector(".header__modal");

function openHeaderMenu() {
  headerContainer.classList.toggle("change");

  if (headerModal.style.display === "none") {
    headerModal.style.display = "inline";
  } else {
    headerModal.style.display = "none";
  }
}

headerContainer.addEventListener("click", openHeaderMenu);
