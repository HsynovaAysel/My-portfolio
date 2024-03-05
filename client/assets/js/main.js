let listAll = document.querySelectorAll("li");
listAll.forEach((item) =>
  item.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
  })
);

let gear=document.querySelector('.gear')
let templateBox=document.querySelector('.template-box')

gear.addEventListener('click',function(){
    // console.log('salam');
templateBox.classList.toggle('template-box-block')
})