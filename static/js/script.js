const menu = document.getElementsByClassName("menu")
let is_hidden = true

function toggle_hide() {
  if (is_hidden) {
    document.getElementById("menu").classList.remove("notopened")
  } else {
    document.getElementById("menu").classList.add("notopened")
  }
  is_hidden = !is_hidden
}
