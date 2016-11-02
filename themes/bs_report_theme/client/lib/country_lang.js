'use strict';
const countries = require("json!./countries_list.json");

export default function countryLang() {

  const cons =  countries.map(con => {
    let ob = {};
    ob['name'] = con['name'];
    ob['iso_code'] = con['alpha2Code'];
    ob['languages'] = con['languages'].map(lang => lang['iso639_1']);
    return ob;
  });

  console.log(JSON.stringify(cons));
}
