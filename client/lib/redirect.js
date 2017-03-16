const countries = require("./countries_list.json");

export default function redirect() {
  let country = countries.filter(country => country.name.toLowerCase() == bs.geo.country.names.en.toLowerCase());
  let lang = country[0].languages[0];
  let url = bs.langs[lang] ? bs.langs[lang].url : null;
  window.localStorage.setItem('bs-lang', lang);
  let storageLang = window.localStorage.getItem('bs-lang');
  let redirect = window.localStorage.getItem('bs-redirect') ? true : false;

  if (url && redirect == false) {
    window.localStorage.setItem('bs-redirect', true);
    window.location = url;
  }
}
