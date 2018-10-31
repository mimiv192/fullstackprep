console.log('Hello World!');

const form = document.querySelector('form');
const API_URL = 'http://localhost:3000/chirps';
form.addEventListener('submit',(event) => {
  event.preventDefault();
  const formData = new FormData(form);
   const name = formData.get('name');
   const content =formData.get('content');


   const chirp = {
       name, 
       content
   };
   console.log(chirp);
});

//    fetch(API_URL,)
//    method:'POST',
//    body:JSON.stringify(chirp),
//    body: chirp,
//    headers: {
//        'content-type': 'application/json'
//    }
// }):
// });