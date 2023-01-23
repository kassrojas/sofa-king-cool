const imageUploadEl = document.querySelector('#image');

imageUploadEl.addEventListener('change', async (event) => {
  console.log('HELLO')
  const file = event.target.files[0];
  const formData = new FormData();
  const config = { 
    withCredentials: true
  };       
  formData.append("file", file);
  const item = await axios.post('/api/upload', formData, config);
  // if (item) location.reload();
});