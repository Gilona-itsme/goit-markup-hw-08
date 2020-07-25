// (() => {
//   const refs = {
//     menuBtnRef: document.querySelector("[data-menu-button]"),
//     mobilMenuRef: document.querySelector("[data-menu]"),
//   };

//   refs.menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       refs.menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     refs.menuBtnRef.classList.toggle("is-open");
//     refs.menuBtnRef.setAttribute("aria-expanded", !expanded);
//     refs.mobilMenuRef.classList.toggle("is-open");
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
