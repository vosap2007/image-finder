import {createFormSearch, createPhotoCard} from './createrShablons';
import apiService from './apiService';
import writesValueInput from './valueInput';

const refs = {
    formEl: document.querySelector('.form'),
    galeryBox: document.querySelector('.galery-box'),
};

function renderFormSearch() {
 refs.formEl.insertAdjacentHTML('beforeend', createFormSearch());   
};

createFormSearch();
renderFormSearch();

const searchFormEl = document.querySelector('.search-form');
      searchFormEl.addEventListener('submit', onInput);

function onInput (event) {
event.preventDefault();
const dataValue = writesValueInput(event);

    apiService(dataValue).then(r => {
        r.hits.map(photo =>
          refs.galeryBox.insertAdjacentHTML(
              'beforeend', createPhotoCard(photo)
              ))
        })
};

apiService(searchEl);
createPhotoCard(photo);