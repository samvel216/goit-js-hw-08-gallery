const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector(".gallery");
const galleryImageEl = galleryItems.map((element) => 
  `<li class="gallery__item"><a href="" class="gallery__link"><img class="gallery__image" data-source="${element.original}" src="${element.preview}"
 alt="${element.description}"/></a></li>`).join("");
galleryEl.insertAdjacentHTML("afterbegin", galleryImageEl);
const lightboxEl = document.querySelector(".js-lightbox");
const lightboxImgEl = document.querySelector(".lightbox__image");
const bigImageGallery = (event) => {
  event.preventDefault();
  lightboxEl.classList.add("is-open");
  event.target.src = `${event.target.dataset.source}`;
  lightboxImgEl.src = `${event.target.src}`;
  console.log(lightboxImgEl.src)
  console.log(event.target); 
  }
galleryEl.addEventListener("click", bigImageGallery);
const btnCloseEl = document.querySelector('.lightbox button[data-action = "close-lightbox"]');
const removelightboxElClass = (event) => {
event.preventDefault();
  lightboxEl.classList.remove("is-open");
  lightboxImgEl.src = "";
}
btnCloseEl.addEventListener('click', removelightboxElClass);
const owerlayEl = document.querySelector(".lightbox__overlay");
const closeOwerlay = (event) => {
  event.preventDefault();
  lightboxEl.classList.remove("is-open");
  lightboxImgEl.src = "";
}
owerlayEl.addEventListener('click', closeOwerlay);
const escapeCloseFunk = (event) => {
  event.preventDefault();
  if (event.key === "Escape" && lightboxEl.classList.contains("is-open") === true) {
  lightboxEl.classList.remove("is-open");
  lightboxImgEl.src = "";
 }
}
window.addEventListener("keydown", escapeCloseFunk);
const imageEl = document.querySelectorAll(".gallery__image"); 
const lightboxImgEloo = document.querySelectorAll(".lightbox__image");
const arrayLeftRight = (event) => {
  event.preventDefault();
  if (event.key === "ArrowRight" && lightboxEl.classList.contains("is-open") === true) {     
    let massiveOfImageEl = [];
    for (const element of imageEl) { 
      massiveOfImageEl.push(element.dataset.source);
    } 
    const indexOfmassiveOfImageEl = massiveOfImageEl.indexOf(lightboxImgEl.src);
    const indexOfmassiveOfNextImageEl = indexOfmassiveOfImageEl + 1;
    lightboxImgEl.src = massiveOfImageEl[indexOfmassiveOfNextImageEl];  
  } 
  if (event.key === "ArrowLeft" && lightboxEl.classList.contains("is-open") === true) { 
      let massiveOfImageEl = [];
    for (const element of imageEl) { 
      massiveOfImageEl.push(element.dataset.source);
    } 
    const indexOfmassiveOfImageEl = massiveOfImageEl.indexOf(lightboxImgEl.src);
    const indexOfmassiveOfNextImageEl = indexOfmassiveOfImageEl - 1;
    lightboxImgEl.src = massiveOfImageEl[indexOfmassiveOfNextImageEl];  
  } 
}
window.addEventListener("keydown", arrayLeftRight);



