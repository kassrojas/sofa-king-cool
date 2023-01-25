const serverModalButton = document.querySelector('.fail-button');

const handleSearch = async (event) => {
  event.preventDefault();

  const roomId = document.querySelector('.add-btn').getAttribute('data-index-number');
  const q = document.querySelector('.form-select').value;
  document.querySelector('.furnType').innerHTML = q;

  if (q) {
    const response = await fetch(`/api/furniture/${q}`)
  }
  document.location.replace(`/api/furniture/${q}`);
}

const addFurniture = async (event) => {
  const furnitureId = event.target.getAttribute('data-index-number');
  const roomName = document.querySelector('.room-choice').value;
  const lowercaseName = roomName.toLowerCase();
  const dashedName = lowercaseName.replace(' ', '-');

  const roomId = document.querySelector(`.${dashedName}`).getAttribute('data-index-number');

  if (roomId) {
    const response = await fetch('/api/room-furniture', {
      method: 'POST',
      body: JSON.stringify({
        furniture_id: furnitureId,
        room_id: roomId
      }),
      headers: { 'Content-Type': 'application/json' },
    }
    )
    if (response.status === 500) {
      serverModalButton.click();
      return;
    }
  };
}


document.querySelector('#furniture-container').addEventListener('click', (event) => {
  if (event.target.matches('.add-btn')) {
    event.target.innerHTML = "&#10003";
    addFurniture(event);
  }
})

document.querySelector('.search-btn').addEventListener('click', (event) => {
  handleSearch(event);
});