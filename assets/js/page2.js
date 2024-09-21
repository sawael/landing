let i = 0;
let slide = document.getElementsByClassName("slides");
function right() {
    slide[i].classList.remove("active");
    i++;
    if (i >= slide.length){
        i = 0;
    }
    slide[i].classList.add("active");
}
function left() {
    slide[i].classList.remove("active");
    i--;
    if (i < 0){
        i = slide.length - 1;
        }
        slide[i].classList.add("active");
        };