let slideopen = document.getElementsByClassName("slideopen")[0];
let closebtn = document.getElementsByClassName("closebtn")[0];
let slider = document.getElementsByClassName("slider")[0];

slideopen.addEventListener("click",(e) => {
    slider.style.position = "fixed";
    slider.style.left = 0;
    slider.style.top = 0;
})

closebtn.addEventListener("click",(e) => {
    slider.style.left = "-110%";
    slider.style.top = 0;
})
