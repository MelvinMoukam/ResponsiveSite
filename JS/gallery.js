let galImages = document.querySelectorAll('.singlegallery');
for (let i = 0; i < galImages.length; i++) {

    let image = galImages[i];
    image.addEventListener('click', showSinglePict, false);

}
00

function showSinglePict(e) {
    let image = e.target;
    let imagecontainer = document.getElementById('galleryContainer');
    let bigimage = imagecontainer.querySelector('img');
    bigimage.src = image.src;
    imagecontainer.classList.toggle('visible');
    imagecontainer.addEventListener('click', closeSinglePict, false);
}
function closeSinglePict() {

    let imagecontainer = document.getElementById('galleryContainer');
    imagecontainer.classList.toggle('visible');
}