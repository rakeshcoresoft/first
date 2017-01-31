var myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    
    if(mySrc === "../images/img1.png")
        myImage.setAttribute("src", "../images/img2.png");
    else
        myImage.setAttribute("src", "../images/img1.png");
};