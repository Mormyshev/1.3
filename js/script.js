function myFunction() {
    var moreText = document.getElementById("text-item-mob");
    var btnMore = document.getElementById("button__text--more");
    var btnLess = document.getElementById("button__text--less");
    var btnImg = document.getElementById("button__img");
    if (btnLess.style.display === "none") {
         moreText.style.display = "inline";
        btnMore.style.display = "none";
        btnLess.style.display = "block";
        btnImg.style.transform = "rotate("+ 180 +"deg)";
    } 
    else {
        moreText.style.display = "none";
        btnMore.style.display = "block";
        btnLess.style.display = "none"
        btnImg.style.transform = "rotate("+ 0 +"deg)";
    }
}