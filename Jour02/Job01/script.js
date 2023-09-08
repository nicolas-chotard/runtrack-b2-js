function myChangeBackgroundColor() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 1337) {
        document.documentElement.style.backgroundColor = "#ffb703";
    } else if (screenWidth >= 505 && screenWidth <= 1336) {
        document.documentElement.style.backgroundColor = "#d90429";
    } else if (screenWidth <= 504) {
        document.documentElement.style.backgroundColor = "#003049";
    }
}


window.addEventListener("load", myChangeBackgroundColor);


window.addEventListener("resize", myChangeBackgroundColor);
