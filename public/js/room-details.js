const showHide = function (element) {
  if (element.nextElementSibling.style.display = "none") {
      element.nextElementSibling.style.display = "flex";
      element.style.display = "none";
  }
}

const updateRoom = async (event) => {
  event.preventDefault();
  
  const roomName = event.target.previousElementSibling.value.trim();
  const roomId = event.target.getAttribute('data-index-number');

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

  const furnitureId = event.target.getAttribute('data-index-id');
  
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