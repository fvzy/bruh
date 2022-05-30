


var themeSwitcher = document.getElementById('theme')
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  themeSwitcher.classList.toggle("dark")
})