'use strict';
import mousePosition from '../lib/get_mouse_position';

import Snap from 'snapsvg';

function showInfo(info) {
  mousePosition(null)
    .then(p => {
      info.style.opacity = 1;
      info.style.top = (p.top - 60) + 'px';
      info.style.left = (p.left - 300) + 'px';
    });
}

export default function () {

  Vue.component('map', {
    template: '#map-template',
    props: ['posts', 'items', 'countriesTranslation', 'mapUrl'],
    data: {
      country: ''
    },

    ready() {
      let info = document.querySelector('.map__info');
      var instance = this;
      let reports = JSON.parse(instance.posts);

      var s = Snap("#svg");

      var myMatrix = new Snap.Matrix();
      myMatrix.scale(3);            // play with scaling before and after the rotate 


      var myMatrixOut = new Snap.Matrix();
      myMatrixOut.scale(1);            // play with scaling before and after the rotate 
      
      Snap.load(this.mapUrl, function (f) {

        f.selectAll("polygon").forEach(el => {
          el.mousemove((e) => {
            console.log(el.attr("id"));

            showInfo(info);

          });
        })

        f.selectAll("path").forEach(el => {
          el.mousedown(e => {
            el.animate({ transform: myMatrix },3000);
          });

          el.mouseout(e => {
            el.animate({ transform: myMatrixOut },3000);
          });

          el.mousemove((e) => {
            showInfo(info);

          });
        })

        f.selectAll("path").attr({
          fill: "#7A1120"
        });
        var g = f.select("g");
        
        s.append(g);
       
      });
    },

    methods: {
      search() {

        if (this.country.length > 2) {
          this.items = this.posts.filter(
            pst => pst.meta_country.toLowerCase().indexOf(this.country.toLowerCase()) != -1
          );
        } else {
          this.items = [];
        }

      }
    }
  });

}