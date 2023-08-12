// change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//show hide faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//show/hide nav menu

const menu = document.querySelector(".nav_menu");
const openbtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

openbtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  openbtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  openbtn.style.display = "inline-block";
};

closebtn.addEventListener("click", closeNav);
