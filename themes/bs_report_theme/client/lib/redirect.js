const countries = require("json!./countries_list.json");

export default function redirect() {
  let country = countries.filter(country => country.name.toLowerCase() == bs.geo.country.names.en.toLowerCase() );
  let lang = country[0].languages[0];
  let url = bs.langs[lang].url;
  window.localStorage.setItem('bs-lang', lang);
  let storageLang = window.localStorage.getItem('bs-lang');

  if(url && storageLang != lang) {
    window.location = url;
  }

  console.log(lang, url);
}
