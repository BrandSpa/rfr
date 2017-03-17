'use strict';
import multipleRender from 'react-multiple-render'; 
import uploader from './uploader';
import ReligionsChart from '../components-react/religionsChart';

$(() => {
  uploader();
  multipleRender(ReligionsChart, '.bs-religions-charts');
});

