const handleSearch = async (event) => {
  const roomId = document.querySelector('.delete-btn').getAttribute('data-index-number');
  console.log(roomId);

  event.preventDefault();
  
  const q = document.querySelector('.form-select').value;
  document.querySelector('.h2').innerHTML = q;
  
  if (q) {
      const response = await fetch(`/api/furniture/${q}`)
  }
  document.location.replace(`/api/furniture/${q}`);
}

document.querySelector('.search-btn').addEventListener('click', (event) => {
  handleSearch(event);
});