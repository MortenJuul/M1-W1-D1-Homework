let photos = [];
let imageList = [];
let image;
let openList = "<li class='partner'>";
let  closeList = "</li>";

let getPartners = (partnerData) => {
    for (let i = 0; i < 6; i++) {
        photos.push(`<img src='Images/partners/${partnerData[i].img}' alt='${partnerData[i].alt}'>`);
        image = openList + photos[i] + closeList;
        imageList.push(image);
        
    }
}

fetch("../partnerData.json")
    .then(response => response.json())
    .then(json => getPartners(json))
    .finally(i => document.getElementById("partners").innerHTML = imageList.join(""));