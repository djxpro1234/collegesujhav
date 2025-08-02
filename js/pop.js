window.addEventListener("load", () => {
  document.getElementById("popup").style.display = "flex";
});


function closePopup() {
  document.getElementById("popup").style.display = "none";
}

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Toggle dropdowns for mobile
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parent = toggle.parentElement;
    parent.classList.toggle('open');
  });
});


