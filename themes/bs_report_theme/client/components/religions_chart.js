'use strict';
import Vue from 'vue';
import hexRgba from 'hex-rgba';

export default function() {

  Vue.component('religions-chart', {
    template: '<div id="religions-chart" style="width: 100%; height: 400px; margin: 0 auto"></div>',
    props: ['religions', 'colors'],

    ready() {
      let religions = this.religions;
      let colors = this.colors;
      let seriesData = [];
      let subSeriesData = [];
      console.log(religions);

      function createData(color, name, y, brighten) {
        let newOb = {};
        let nColor = brighten ? Highcharts.Color(color).brighten(0.2).get() : Highcharts.Color(color).get();

        newOb['color'] = nColor;
        newOb['name'] = name;
        newOb['y'] = parseFloat(y);
        return newOb;
      }

      function getData(obj, key) {
        let religion = obj[key];
        let color = religion.color;
        let newOb = createData(religion.color, religion.name, religion.percent);

        if(religion.sub && Object.keys(religion.sub).length > 0) {
          subSeriesData = subSeriesData.concat(
            Object.keys(religion.sub).map(key => {
              return createData(color, religion.sub[key].name, religion.sub[key].percent, true);
            })
          );
        } else {
          let newSubOb = createData(color, religion.name, religion.percent, true);
          subSeriesData = subSeriesData.concat([newSubOb]);
        }

        return newOb;
      }

      seriesData = Object.keys(religions).map(key => {
        return getData(religions, key);
      });


    $('#religions-chart').highcharts({
        chart: {
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0)',
            style: {
                fontFamily: 'Roboto Condensed'
            }
        },
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: '',
            data: seriesData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: '',
            data: subSeriesData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return '<b>' + this.point.name + ':</b> ' + this.y + '%';
                }
            }
        }]
    });
    }
  });
}
