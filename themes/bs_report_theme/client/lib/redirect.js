const countries = require("json!./countries_list.json");

export default function redirect() {
  let country = countries.filter(country => country.name.toLowerCase() == bs.geo.country.names.en.toLowerCase() );
  console.log(country.languages);
  console.log(bs.geo.country.names.en);
}
