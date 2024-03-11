let listAll = document.querySelectorAll("li");
listAll.forEach((item) =>
  item.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
  })
);

let gear = document.querySelector(".gear");
let templateBox = document.querySelector(".template-box");

gear.addEventListener("click", function () {
  templateBox.classList.toggle("template-box-block");
});
let aboutPage = document.querySelector("#about");
let aboutli = document.querySelector(".about-li");
aboutli.addEventListener("click", function () {
  aboutPage.classList.add("about-page");
  resumePage.classList.remove("resume-page");
  portfolioPage.classList.remove("portfolio-page");
  contactPage.classList.remove("contact-page");
});
let homePage = document.querySelector("#home");
let homeli = document.querySelector(".home-li");
homeli.addEventListener("click", function () {
  aboutPage.classList.remove("about-page");
  resumePage.classList.remove("resume-page");
  portfolioPage.classList.remove("portfolio-page");
  contactPage.classList.remove("contact-page");
});
let resumePage = document.querySelector("#resume");
let resumeli = document.querySelector(".resume-li");
resumeli.addEventListener("click", function () {
  aboutPage.classList.remove("about-page");
  resumePage.classList.add("resume-page");
  portfolioPage.classList.remove("portfolio-page");
  contactPage.classList.remove("contact-page");
});
let portfolioPage = document.querySelector("#portfolio");
let portfolioli = document.querySelector(".portfolio-li");
portfolioli.addEventListener("click", function () {
  aboutPage.classList.remove("about-page");
  resumePage.classList.remove("resume-page");
  portfolioPage.classList.add("portfolio-page");
  contactPage.classList.remove("contact-page");
});
let contactPage = document.querySelector("#contact");
let contactli = document.querySelector(".contact-li");
contactli.addEventListener("click", function () {
  aboutPage.classList.remove("about-page");
  resumePage.classList.remove("resume-page");
  portfolioPage.classList.remove("portfolio-page");
  contactPage.classList.add("contact-page");
});
