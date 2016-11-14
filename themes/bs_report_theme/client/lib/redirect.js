const countries = require("json!./countries_list.json");

export default function redirect() {
  console.log(countries.filter(country => country.name == bs.geo.country.names.en ));
  console.log(bs.geo.country.names.en);
}
