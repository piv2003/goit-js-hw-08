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

const lightBox = new SimpleLightbox('.gallery a', {          
    captionDelay: 250,    	  
    captionsData: 'alt',        
  });

