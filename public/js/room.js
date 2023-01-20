const showHide = function (element) {
    console.log(element.nextElementSibling);
    if (element.nextElementSibling.style.display = "none") {
        element.nextElementSibling.style.display = "flex";
        element.style.display = "none";
    }
}

const submitRoom = async (event) => {
    event.preventDefault();

    const roomName = document.querySelector('#roomNameInput').value.trim();

    if (roomName) {
        const response = await fetch('/api/rooms', {
            method: 'POST',
            body: JSON.stringify({ name: roomName }),
            headers: { 'Content-Type': 'application/json' },
        }
    )};

     document.location.replace('/');
};

const updateRoom = async (event) => {
    event.preventDefault();

    const roomName = document.querySelector('#roomRenameInput').value.trim();
    const roomId = event.target.getAttribute('data-index-number');
    console.log(roomId);

    if (roomName) {
        const response = await fetch('/api/rooms', {
            method: 'PUT',
            body: JSON.stringify({ 
                name: roomName,
                id: roomId
            }),
            headers: { 'Content-Type': 'application/json' },
        }
    )};
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add dish');
      }
};


document.querySelector('#room-container').addEventListener('click', (event) => {
    if (event.target.matches('.renameRoomBtn')) {
        showHide(event.target);
    }
});

document.getElementById('addRoomBtn').addEventListener('click', (event) => {
    showHide(event.target);
});

document.getElementById('submitRoom').addEventListener('click', submitRoom);

document.getElementById('submitRename').addEventListener('click', updateRoom);
