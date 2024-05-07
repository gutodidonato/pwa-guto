document.addEventListener("DOMContentLoaded", function () {
  let lastScrollPosition = window.scrollY;
  let timeIsRunning = true;

  const body = document.body;
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    const telaSobe = currentScrollPosition < lastScrollPosition;
    const telaProximaHeader = currentScrollPosition < 500;
    const telaMobile = screen.width < 900;

    /* Variaveis */

    if (telaSobe && !telaProximaHeader && timeIsRunning && !telaMobile) {
      /* Subiu a tela lá embaixo */
      /*----------*/
      /*----------*/
      header.classList.add("header_slide-in");
      header.classList.remove("header_slide-out");
      /*----------*/
      /*----------*/
    } else if (telaProximaHeader && timeIsRunning && !telaMobile) {
      /*situação de ajuste de header para volta */
      /*----------*/
      /*----------*/
      if (header.classList.contains("header_slide-in")) {
        header.classList.replace("header_slide-in", "header_slide-out");
        timeIsRunning = false;
        setTimeout(() => {
          header.classList.remove("header_slide-out");
        }, 250);
        timeIsRunning = true;
      }
      /*----------*/
      /*----------*/
    } else if (
      !telaSobe &&
      !telaProximaHeader &&
      timeIsRunning &&
      !telaMobile &&
      header.classList.contains("header_slide-in")
    ) {
      /* tela desce lá embaixo */
      /*----------*/
      /*----------*/
      header.classList.remove("header_slide-in");
      header.classList.add("header_slide-out");
      /*----------*/
      /*----------*/
    }
    setTimeout(() => {
      lastScrollPosition = currentScrollPosition;
    }, 100);
  });

  const checkbox = document.querySelector("#checkbox-botao-menu");
});
