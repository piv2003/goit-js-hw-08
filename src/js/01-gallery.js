// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(SimpleLightbox);

const galleryImgRef = document.querySelector('.gallery');
const imgMarkup = galleryItems.map(
  ({ preview, original, description }) => 
      `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>`,)
    .join("");

    galleryImgRef.insertAdjacentHTML("beforeend", imgMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    scrollZoom: false,
    nav: true,
    caption: true,
    captionDelay: 250,    	  
    captionsData: 'alt',
    captionPosition: 'bottom',
    // doubleTapZoom: 1,
  });

  // galleryImgRef.addEventListener('click', event => {
  //   event.preventDefault();
  //   if (!event.target.classList.contains('gallery__image')) {
  //     return;
  //   }
  // });