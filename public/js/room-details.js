// Access furniture api while on a rooms page ????

const showHide = function (element) {
  console.log(element.nextElementSibling);
  if (element.nextElementSibling.style.display = "none") {
      element.nextElementSibling.style.display = "flex";
      element.style.display = "none";
  }
}

const updateRoom = async (event) => {
  event.preventDefault();
  console.log('hello')
  
  const roomName = event.target.previousElementSibling.value.trim();
  console.log(roomName);

  const roomId = event.target.getAttribute('data-index-number');
  console.log(roomId);

  if (roomName) {
      const response = await fetch(`/api/rooms/${roomId}`, {
          method: 'PUT',
          body: JSON.stringify({ 
              name: roomName,
              id: roomId
          }),
          headers: { 'Content-Type': 'application/json' },
      }
      )};
      document.location.replace(`/api/rooms/${roomId}`);
};

const deleteRoom = async (event) => {
  event.preventDefault();
  
  const roomId = event.target.getAttribute('data-index-number');
  console.log(roomId);

  if (roomId) {
      const response = await fetch(`/api/rooms/${roomId}`, {
          method: 'DELETE',
          body: JSON.stringify({ 
              id: roomId
          }),
          headers: { 'Content-Type': 'application/json' },
      }
      )};
      document.location.replace('/');
};

const deleteFurniture = async (event) => {
  event.preventDefault();

  const furnitureId = event.target.previousElementSibling.getAttribute('data-index-id')
  
  if (furnitureId) {
    const response = await fetch(`/api/room-furniture/${furnitureId}`, {
        method: 'DELETE',
        body: JSON.stringify({ 
            id: furnitureId
        }),
        headers: { 'Content-Type': 'application/json' },
    }
    )};
    document.location.reload();

}

// const handleSearch = async (event) => {
//   const roomId = document.querySelector('.delete-btn').getAttribute('data-index-number');
//   console.log(roomId);

//   event.preventDefault();
  
//   const q = document.querySelector('.form-select').value;
  
//   if (q) {
//       const response = await fetch(`/api/furniture/${q}`)
//   }
//   document.location.replace(`/api/furniture/${q}`);
// }


// document.querySelector('.search-btn').addEventListener('click', (event) => {
//   handleSearch(event);
// });


document.querySelector('.room-card').addEventListener('click', (event) => {
  if (event.target.matches('.renameRoomBtn')) {
    showHide(event.target);
  }
  if (event.target.matches('.rename-btn')) {
    updateRoom(event);
  }
  if (event.target.matches('.delete-btn')) {
    deleteRoom(event);
  }
  if (event.target.matches('.delete-furniture')) {
    deleteFurniture(event);
  }
})