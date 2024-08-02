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

window.addEventListener("scroll", () => {
	if (window.scrollY > 600) {
		backtotop.style.opacity = "100";
		backtotop.style.visibility = "visible";
		backtotop.style.transform = "translateY(0%)";
	} else {
		backtotop.style.opacity = "0";
		backtotop.style.transform = "translateY(8%)";
		backtotop.style.visibility = "hidden";
	}
});
