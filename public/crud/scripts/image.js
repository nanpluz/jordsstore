function showImages() {
    document.getElementById("images").innerHTML = "";
    for (let i = 0; i < form.images.length; i++) {
        if (i == 0) {
            document.getElementById("images").innerHTML += (`<a href="#" class="image-url" onclick="deleteImage(${i})" onmouseover="changeButton(${i})" onmouseout="rechangeButton(${i})">` + form.images[i] + `</a>`);
        } else {
            document.getElementById("images").innerHTML += (`<a href="#" class="image-url" onclick="deleteImage(${i})" 
            onmouseover="changeButton(${i})"
            onmouseout="rechangeButton(${i})">` + form.images[i] + `</a>`);
        }
    }
}

function addImage() {
    let image = document.getElementById("image").value;
    document.getElementById("image").value = "";
    form.images.push(image);
    showImages();
}

function deleteImage(i) {
    form.images.splice(i, 1);
    showImages();
}

let tempImage;
function changeButton(i) {
    tempImage = document.getElementsByClassName("image-url")[i].innerHTML;
    document.getElementsByClassName("image-url")[i].style.transition = "200ms";
    document.getElementsByClassName("image-url")[i].style.color = "#FF2E63";
    document.getElementsByClassName("image-url")[i].innerHTML += " x ";
}

function rechangeButton(i){
    document.getElementsByClassName("image-url")[i].style.color = "#08D9D6";
    document.getElementsByClassName("image-url")[i].innerHTML = tempImage;
}