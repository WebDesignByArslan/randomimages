function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;

    document.getElementById("image").innerHTML = previewPic.alt;
     
}
   
    function unDo(){
    document.getElementById("image").style.backgroundImage = `url('')`;

    document.getElementById("image").innerHTML = `Hover over an image below to display here.`;
}

// onFocus Event
function change(element) {
    element.style.backgroundColor = "gold";
    element.style.color = "black";
}

// Onblur Event
function myFunction() {
    let x = document.querySelectorAll("img");
    for (i = 0; i < x.length; i++){
        x[i].alt = x[i].alt.toUpperCase();
    }
}
myFunction();
 
// Setting Tabindex
function addTabIndex(){
    let images = document.querySelectorAll("img");

    for (i = 0; i < images.length; i++){
        let tabIndex = i;

        images[i].setAttribute("tabindex", tabIndex);
    }
}