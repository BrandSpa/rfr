const countries = require("json!./countries_list.json");

export default function redirect() {
  let country = countries.filter(country => country.name.toLowerCase() == bs.geo.country.names.en.toLowerCase() );
  let lang = country[0].languages[0]);
  console.log(bs.langs[lang]);
  console.log(bs.geo.country.names.en);
}
