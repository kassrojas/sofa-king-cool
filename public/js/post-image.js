
// document.querySelector('#submit').addEventListener('click', async (event) => {
//   const imageUploadEl = document.querySelector('#image');

//   console.log('HELLO');

//   const file = imageUploadEl.files[0];
//   const formData = new FormData();

//   const config = { 
//     withCredentials: true
//   };       

//   formData.append("file", file);



//   const response = await fetch('api/upload/:id', {
//     method: 'POST',
//     body: formData,
//     headers: { 'Content-Type': 'multipart/form-data' }
//   },
// )
//   // const item = await axios.post('/api/upload', formData, config);
//   // if (item) location.reload();
// });

const imageUploadEl = document.querySelector('#image');

imageUploadEl.addEventListener('change', async (event) => {
  console.log('HELLO');

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