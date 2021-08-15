export function createFormSearch() {
    return `<form class="search-form" id="search-form">
<input
  type="text"
  name="query"
  autocomplete="off"
  placeholder="Search images..."
/>
</form>`
};

export function createPhotoCard(photo) {
    return `<div class="photo-card">
    <img src="${photo.webformatURL}" alt="" />
  
    <div class="stats">
      <p class="stats-item">
        <i class="material-icons">thumb_up</i>
        ${photo.likes}
      </p>
      <p class="stats-item">
        <i class="material-icons">visibility</i>
        ${photo.views}
      </p>
      <p class="stats-item">
        <i class="material-icons">comment</i>
        ${photo.comments}
      </p>
      <p class="stats-item">
        <i class="material-icons">cloud_download</i>
        ${photo.downloads}
      </p>
    </div>
  </div>`    
};