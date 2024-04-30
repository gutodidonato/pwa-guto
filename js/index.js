document.addEventListener("DOMContentLoaded", function () {
  let lastScrollPosition = window.scrollY;

  const body = document.body;
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (
      currentScrollPosition < lastScrollPosition &&
      currentScrollPosition > 300 &&
      screen.width > 900
    ) {
      /* Subiu a tela */
      header.classList.add("header_slide-in");
      header.classList.remove("header_slide-out");
      /*----------*/
    } else if (
      currentScrollPosition > lastScrollPosition &&
      currentScrollPosition > 300 &&
      screen.width > 900 &&
      header.classList.contains("header_slide-in")
    ) {
      /* Animações de transição, descendo a tela */
      header.classList.remove("header_slide-in");
      header.classList.add("header_slide-out");
      /*----------*/
    } else if (currentScrollPosition > 300) {
      /*situação de ajuste de header para volta */
      logo.classList.add("logo_header-reduzido");
      /*------------*/
    } else {
      /* Tela lá em cima */
      header.classList.remove("header_slide-in");
      header.classList.remove("header_slide-in");
      /*----------*/
    }
    /* Passando valor */
    lastScrollPosition = currentScrollPosition;
  });
});
