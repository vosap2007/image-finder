import API_key from './API_key';

export default function apiService(searchEl) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchEl}&page=1&per_page=12&key=${API_key}`)
    .then(r => r.json())
    };