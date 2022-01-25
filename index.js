

let language = [];
let a = fetch('https://restcountries.com/v3/all').then((response) => {
    return response.json();
}).then((data) => {
    let dtt = data;
    dtt.forEach(element => {
      language.push(element.languages)
    });
    console.log(new Set(language.flat()).size);
}).catch((err) => { console.log(err); });

