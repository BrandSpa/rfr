'use strict';

export default function jsonParse(jsonStr) {
  let str = JSON.stringify(jsonStr);
  return  JSON.parse(str);
}
