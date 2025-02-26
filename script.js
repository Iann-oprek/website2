// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Contact form validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Harap isi semua field.");
    }
  });

// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.innerText = document.body.classList.contains("dark-mode")
    ? "Mode Terang"
    : "Mode Gelap";
});
