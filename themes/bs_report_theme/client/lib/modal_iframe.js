'use strict';

export default function modalIframe() {
  $('.open-modal-iframe').on('click', function(e) {
    e.preventDefault();
    let url = $(this).attr('href');
    let template = `
      <div class="modal modal--show">
        <a href="#" class="modal__close" v-on:click="close"><i class="ion-close"></i></a>
        <div class="iframe-container">
          <iframe src="${url}" frameborder="0" height="315" width="100%" allowfullscreen=""></iframe>
        </div>
      </div>
    `;
    
    $('body').addClass('model-open');
    $('body').append(template);
  });
}