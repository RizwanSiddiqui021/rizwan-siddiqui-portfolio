const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// mobile-menu-functions
function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

// nav-bar-functions
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-75",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:bg-opacity-75",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "bg-opacity-75",
      "shadow-sm",
      "dark:border",
      "dark:border-white/90",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-75",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:bg-opacity-75",
      "dark:shadow-white/20"
    );
    navLinks.classList.add(
      "bg-white",
      "bg-opacity-75",
      "shadow-sm",
      "dark:border",
      "dark:border-white/90",
      "dark:bg-transparent"
    );
  }
});

//dark-mode-function
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-sceme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

// animated-text functions
const textField = document.querySelector("#animated-text");
let text = "I'm Rizwan Siddiqui...";

function textTypingEffect(element, text, i = 0) {
  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => textTypingEffect(element, text, i + 1), 70);
}

textTypingEffect(textField, text);
