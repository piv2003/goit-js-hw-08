// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(SimpleLightbox);

const galleryImgRef = document.querySelector('.gallery');
const imgMarkup = createItemsMarkup(galleryItems);
galleryImgRef.insertAdjacentHTML("beforeend", imgMarkup);

function createItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      `;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt',
    doubleTapZoom: 1,
  });

  galleryImgRef.addEventListener('click', event => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
      return;
    }
  });