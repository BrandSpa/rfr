'use strict';
import $ from 'jquery';

export default function getMousePosition(e, cb) {
  var el = e ? e : document;

  let mouseMov = new Promise(function(resolve, reject) {
    $(el).on('mousemove', function(evt) {
      return resolve({ left: evt.pageX, top: evt.pageY});
    });
  });

  return mouseMov;

};
