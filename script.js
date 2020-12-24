function toggleMobileNavigation() {
  let element = document.querySelector("#mobile__navigation");

  if (element.classList.contains("mobile__navigation--open")) {
    element.classList.remove("mobile__navigation--open");
  } else {
    element.classList.add("mobile__navigation--open");
  }
}
