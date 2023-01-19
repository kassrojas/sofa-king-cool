const showHide = function (target) {
    if (document.getElementById('addRoomForm').style.display = "none") {
        document.getElementById('addRoomForm').style.display = "flex";
        document.getElementById('addRoomBtn').style.display = "none";
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

        // render all rooms + new room
    )};
};

document.getElementById('submitRoom').addEventListener('click', submitRoom);

document.getElementById('addRoomBtn').addEventListener('click', function (event) {
    showHide(event.target);
});