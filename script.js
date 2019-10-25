const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
const fotosContainer = document.getElementById('fotos-container');
const bigFotoContainer = document.getElementById('big-foto-container');
const bgContainer = document.getElementById('bg-container');

// bgContainer.addEventListener('click', removeFullPic);

let photos = [];

init();

function init() {
  fetch(PHOTOS_URL)
    .then((resp) => resp.json())
    .then(addPhotoList)
}

function addPhotoList(data) {
  photos = data;

  photos.forEach(function (photos) {
    let newPic = document.createElement('img');
    newPic.setAttribute('src', photos.thumbnailUrl);

    fotosContainer.append(newPic);
    newPic.classList.add('imgClass');

    newPic.addEventListener('click', function showBigPic() {
      let bigPic = document.createElement('img');
      bigPic.setAttribute('src', photos.url);

      bigFotoContainer.classList.add('activeFullPic');
      bgContainer.classList.add('bgFullPic');

      bigFotoContainer.append(bigPic);
      bigPic.classList.add('bigPicClass');

      bgContainer.addEventListener('click', function removeFullPic(){
        bigPic.remove();
        bgContainer.classList.remove('bgFullPic');
        bigFotoContainer.classList.remove('activeFullPic');
    })


    console.log(photos);
  })

  })
}

// function removeFullPic(){
//   if(bgContainer.classList.contains('bgFullPic')){
//     bigFotoContainer.remove(bigPic);
//     // bigFotoContainer.classList.remove('activeFullPic');
//     // bgContainer.classList.remove('bgFullPic');
//   }
// }