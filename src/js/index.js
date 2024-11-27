// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '38440528-27ad43a15fe64cab61d6047d1';

// function fetchBooks() {
//   const options = {
//     key: 'BASE_URL',
//     q: '',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   };
//   fetch(`${BASE_URL}?key=${API_KEY}`, options)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }
// fetchBooks();
import { fetchImages } from '../js/fetchImages';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('.search-form-input');
const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');

btnLoadMore.style.display = 'none';

let pageNr = 1;

formSearch.addEventListener('submit', handlerFormSubmit);

async function handlerFormSubmit(evt) {
  evt.preventDefault();
  // cleanGallery();
  // const trimmedValue = input.value.trim();
  // if (!trimmedValue) {
  //   return;
  // }

  const trimmedValue = input.value;
  try {
    const { hits, totalHits } = await fetchImages(trimmedValue, pageNr);

    console.log(hits);
    renderImageList(hits);

    // if (hits.length === 0) {
    //   Notiflix.Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
    //   return;
    // } else if (Math.ceil(totalHits / 40) === pageNr) {
    //   renderImageList(hits);
    //   btnLoadMore.style.display = 'none';
    //   return Notiflix.Notify.info(
    //     "We're sorry, but you've reached the end of search results."
    //   );
    // } else {
    //   renderImageList(hits);
    //   Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    //   btnLoadMore.style.display = 'block';
    //   gallerySimpleLightbox.refresh();
    // }
    // if (hits.length > 1 || hits.length < 40) {
    //   btnLoadMore.style.display = 'none';
    //   Notiflix.Notify.failure(
    //     "We're sorry, but you've reached the end of search results."
    //   );
    // }
  } catch (error) {
    console.log(error);
  }
}

// btnLoadMore.addEventListener('click', handlerLoadMore);

// async function handlerLoadMore() {
//   pageNr += 1;
//   const trimmedValue = input.value.trim();
//   btnLoadMore.style.display = 'none';

//   const { hits, totalHits } = await fetchImages(trimmedValue, pageNr);
//   if (hits.length === 0) {
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//     return;
//   }
//   renderImageList(hits);
//   btnLoadMore.style.display = 'block';

//   if (Math.ceil(totalHits / 40) === pageNr) {
//     btnLoadMore.style.display = 'none';
//     return Notiflix.Notify.info(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }
// }

function renderImageList(images) {
  // console.log(images, 'images');
  const markup = images
    .map(image => {
      // console.log('img', image);
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `<div class="photo-card">

       <a href="${largeImageURL}"><img class="photo" src="${webformatURL}" alt="${tags}" title="${tags}" loading="lazy"/></a>

        <div class="info">
           <p class="info-item">
    <b>Likes</b> <span class="info-item-api"> ${likes} </span>
</p>
            <p class="info-item">
                <b>Views</b> <span class="info-item-api">${views}</span>  
            </p>
            <p class="info-item">
                <b>Comments</b> <span class="info-item-api">${comments}</span>  
            </p>
            <p class="info-item">
                <b>Downloads</b> <span class="info-item-api">${downloads}</span> 
            </p>
        </div>
    </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
  // gallery.insertAdjacentHTML('beforeend', markup);
}

// function cleanGallery() {
//   gallery.innerHTML = '';
//   pageNr = 1;
//   btnLoadMore.style.display = 'none';
// }
