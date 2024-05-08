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
    const telaMobile = window.innerWidth < 900;

    /* Variaveis */
    if (telaMobile) {
      header.classList.remove("header_slide-in");
      header.classList.remove("header_slide-out");
    } else if (telaSobe && !telaProximaHeader && timeIsRunning && !telaMobile) {
      /* Subiu a tela lá embaixo */
      /*----------*/
      /*----------*/
      header.classList.add("header_slide-in");
      header.classList.remove("header_slide-out");
      console.log("Sobe");
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
        console.log("Ajuste");
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
      console.log("Desce");
      /*----------*/
      /*----------*/
    }
    setTimeout(() => {
      lastScrollPosition = currentScrollPosition;
    }, 100);
  });
});
