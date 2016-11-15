'use strict';

export default function modalIframe() {
  $('.open-modal-iframe').on('click', function(e) {
    e.preventDefault();
    let url = $(this).attr('href');
    let template = `
      <div class="modal">
        <div class="iframe-container">
          <iframe src="${url}" frameborder="0"></iframe>
        </div>
      </div>
    `;

    $('body').append(template);
  });
}