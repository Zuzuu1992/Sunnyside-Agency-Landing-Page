const navIcon = document.querySelector(".mobile-nav-btn");
const navElement = document.querySelector(".mobile-nav");

navIcon.addEventListener("click", () => {
  if (navElement.style.display === "none") {
    navElement.style.display = "block";
    navIcon.style.opacity = "0.5";
  } else {
    navElement.style.display = "none";
    navIcon.style.opacity = "1";
  }
});
