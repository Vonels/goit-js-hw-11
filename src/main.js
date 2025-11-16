import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const searchValue = event.currentTarget.elements['search-text'].value.trim();

  if (!searchValue) {
    iziToast.warning({
      message: 'Please enter a search query 🙂',
      position: 'topRight',
    });
    return;
  }

  clearGallery();

  try {
    const images = await getImagesByQuery(searchValue);

    if (!images.length) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(images);
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    form.reset();
  }
}
