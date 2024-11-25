function fetchBooks() {
  fetch('https://pixabay.com/api/?key=38440528-27ad43a15fe64cab61d6047d1')
    .then(res => res.json)
    .then(console.log);
}
