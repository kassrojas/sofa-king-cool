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
    // const lowercaseName = roomName.toLowerCase();
    // const dashedName = lowercaseName.replace(' ', '-');

    // console.log(dashedName);


    if (roomName) {
        const response = await fetch('/api/rooms', {
            method: 'POST',
            body: JSON.stringify({ 
                name: roomName,
                // dashed_name: dashedName
            }),
            headers: { 'Content-Type': 'application/json' },
        }
    )};

    const here = document.location;
    document.location.replace(`${here}`);
};

const updateRoom = async (event) => {
    event.preventDefault();
    console.log('hello')
    
    const roomName = event.target.previousElementSibling.value.trim();
    const lowercaseName = roomName.toLowerCase();
    const dashedName = lowercaseName.replace(' ', '-');

    const roomId = event.target.getAttribute('data-index-number');

    if (roomName) {
        const response = await fetch(`/api/rooms/${roomId}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: roomName,
                dashed_name: dashedName,
                id: roomId
            }),
            headers: { 'Content-Type': 'application/json' },
        }
        )};
        document.location.replace('/');
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

const handleSearch = async (event) => {
    const roomId = document.querySelector('.delete-btn').getAttribute('data-index-number');
    console.log(roomId);
  
    event.preventDefault();
    
    const q = document.querySelector('.form-select').value;
    
    if (q) {
        const response = await fetch(`/api/furniture/${q}`)
    }
    document.location.replace(`/api/furniture/${q}`);
  }
  

document.getElementById('addRoomBtn').addEventListener('click', (event) => {
    showHide(event.target);
});

document.querySelector('.search-btn').addEventListener('click', (event) => {
    handleSearch(event);
  });

document.getElementById('submitRoom').addEventListener('click', submitRoom);


    

document.querySelector('#room-container').addEventListener('click', (event) => {
    if (event.target.matches('.rename-btn')) {
        updateRoom(event);
    }
    else if (event.target.matches('.delete-btn')) {
        deleteRoom(event);
    }
    else if (event.target.matches('.renameRoomBtn')) {
        showHide(event.target);
    }
});

