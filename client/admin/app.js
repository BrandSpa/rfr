'use strict';

import uploader from './uploader';
import religionsChart from '../components/religions_chart';

$(() => {
  uploader();
  religionsChart();

  new Vue({
    el: '#metaboxes-report'
  });

});

