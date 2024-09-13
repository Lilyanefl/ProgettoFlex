document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const logoSection = document.querySelector(".logo");
  const logoHeight = logoSection.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= logoHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
