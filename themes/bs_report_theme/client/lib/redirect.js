const countries = require("json!./countries_list.json");

export default function redirect() {
  
  console.log(countries.filter(country => country.name.toLowerCase() == bs.geo.country.names.en.toLowerCase() ));
  console.log(bs.geo.country.names.en);
}
