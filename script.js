const themeToggle = document.querySelector("#theme-toggle");
const backtotop = document.querySelector("#backtotop");

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-label", "التحويل للوضع الفاتح");
}

function enableLightMode() {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
  themeToggle.setAttribute("aria-label", "التحويل للوضع الداكن");
}

document.body.classList.contains("light-theme")
  ? enableLightMode()
  : enableDarkMode();

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light-theme")
    ? enableDarkMode()
    : enableLightMode();
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    backtotop.style.visibility = "visible";
    backtotop.style.transform = "translateY(1%)";
    backtotop.style.transition =
      "transform 500ms cubic-bezier(0.11, 0.14, 0.29, 1.32)";
  } else {
    backtotop.style.visibility = "hidden";
    backtotop.style.transform = "translateY(8%)";
  }
});
