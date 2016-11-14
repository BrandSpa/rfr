import countriesList from './countries_list.json';

export default function redirect() {
  console.log(countriesList.filter(country => country.name == bs.geo.country.names.en ));
  console.log(bs.geo);
}