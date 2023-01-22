const handleSearch = async (event) => {
  const roomId = document.querySelector('.add-btn').getAttribute('data-index-number');
  console.log(roomId);

  event.preventDefault();
  
  const q = document.querySelector('.form-select').value;
  document.querySelector('.h2').innerHTML = q;
  
  if (q) {
      const response = await fetch(`/api/furniture/${q}`)
  }
  document.location.replace(`/api/furniture/${q}`);
}

const addFurniture = async (event) => {
  const furnitureId = event.target.getAttribute('data-index-number');
  const roomName = document.querySelector('.room-choice').value;
  const roomId = document.querySelector(`.${roomName}`).getAttribute('data-index-number');
  
  console.log(furnitureId);
  console.log(roomId);

  if (roomId) {
    const response = await fetch('/api/room-furniture', {
        method: 'POST',
        body: JSON.stringify({ 
          furniture_id: furnitureId,  
          room_id: roomId
        }),
        headers: { 'Content-Type': 'application/json' },
    }
    )};
    // MESSAGE IN MODAL - SUCCESSFULLY ADDED FUNRITURE /////////////
}

document.querySelector('#furniture-container').addEventListener('click', (event) => {
  if (event.target.matches('.add-btn')) {
    addFurniture(event);
  }
})

document.querySelector('.search-btn').addEventListener('click', (event) => {
  handleSearch(event);
});