'use strict';

export default function footerNav() {
  let each = fn => arr => Array.prototype.forEach.call(arr, fn);
  let langs = document.querySelectorAll('#footer .lang-item');
  let li = document.createElement('li');

  li.attributes('class', 'menu-item');
  let appendTo = each((el) => {
    li.appendChild(el);
  });
  
  appendTo(langs);

  console.log(li);

}