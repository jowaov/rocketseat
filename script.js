function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (html.classList.contains("light")) {
    // se tiver com light mode = avatar light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode = avatar dark
    img.setAttribute("src", "./assets/avatar-dark.png")
  }

  // substituir alt + reutilizando a const "img"
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "joão light avatar")
  } else {
    img.setAttribute("alt", "joão dark avatar")
  }
}
