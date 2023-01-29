function toggleMode() {
  // guardando a página
  const html = document.documentElement
  // guardando a image
  const image = document.querySelector("#profile img")

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // o resultado é o mesmo que o código comentado acima.
  html.classList.toggle("light")

  // alterando a imagem
  if (html.classList.contains("light")) {
    // imagem logo do trabalho
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Logo da empresa CF distribuidora com letras brancas e fundo vermelho com as letras C e F estilizadas."
    )
  } else {
    // imagem avatar normal
    image.setAttribute("src", "./assets/avatar-dark.png")
    image.setAttribute(
      "alt",
      "foto de Renan Cassiano sorrindo, usando camisa laranja com manga longa, por cima de outra camisa, preta, cordão prata e pingente de cruz, cabelos curtos negros e barba baixa."
    )
  }
}
