let gallery = "";

const fetchPhotos = async () => {
    const res = await fetch("../pix.json");
    const photos = await res.json();
    photos.map( (photo, i) => {
        gallery += `<div class="picbox"><figure><img src="${photo.url}" class="profile medium"><figcaption>${photo.desc}</figcaption></figure></div>`
    });
    document.getElementById("pix").innerHTML = gallery;
}

fetchPhotos();


