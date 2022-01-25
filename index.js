 async function getLang() {

  let language = [];
  fetch('https://restcountries.com/v3/all').then((response) => {
    return response.json();
  }).then((data) => {
    let dtt = data;
    dtt.forEach(element => {
      if (typeof element.languages === 'object' && element.languages !== null) {
        language.push(Object.values(element.languages))
      }
    });
    let l = language.flat();
    console.log(new Set(l).size);
  }).catch((err) => { console.log(err); });
  
}
getLang();