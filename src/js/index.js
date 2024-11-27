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
// import SimpleLightbox from 'simplelightbox';
//import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('.search-form-input');
const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');
//let gallerySimpleLightbox = new SimpleLightbox('.gallery a');

btnLoadMore.style.display = 'none';

let pageNr = 1;

formSearch.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(evt) {
  evt.preventDefault();
  //   if(!)
}
