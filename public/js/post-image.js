const imageUploadEl = document.querySelector('#image');

imageUploadEl.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  const formData = new FormData();    

  formData.append("file", file);

  const response = await fetch(`/api/upload/${event.target.dataset.id}`, {
        method: 'POST',
        body: formData
      },
    )

  const type = event.target.dataset.type;

  if (response.ok) location.replace(`/api/furniture/${type}`);
});