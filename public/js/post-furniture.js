const serverModalButton = document.querySelector('.fail-button');

const handleSubmit = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const type = document.querySelector('#type').value;
  const price = document.querySelector('#price').value.trim();
  const description = document.querySelector('#notes').value.trim();

  if (name) {
    const response = await fetch('api/furniture', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        type: type,
        price: price,
        notes: description
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 500 ) {
      serverModalButton.click();
      return;
  } 
    const { id } = await response.json();
    document.location.replace(`/post-image/${id}`);
  }
}

document.querySelector('#submit').addEventListener('click', (event) => {
  handleSubmit(event);
})