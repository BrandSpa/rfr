'use strict';
import mousePosition from '../lib/get_mouse_position';

export default function() {

  Vue.component('map', {
    template: '#map-template',
    props: ['posts'],
    data: {
      country: ''
    },

    ready() {
      let comp = this;
      let info = document.querySelector('.map__info');
      var instance = this;

      d3.select(".map svg g").selectAll("g").on('mouseleave', function() {
        var _this = this;
        d3.select(_this).style("fill", "").style("webkit-box-shadow", "10px 5px 5px #fff");
        info.style.zIndex= -100;
      });

      let gs = d3.select(".map svg #map-g").selectAll("g");

      [].slice.call(gs._groups[0]).forEach(function(g) {

      });

      gs.on('mousemove', function() {
        console.log(instance.posts);
        let pst = instance.posts.filter(post => post.meta_country == this.getAttribute('id') );
        let situ = pst.meta_situation ? pst.meta_situation : 'neh';
        d3.select(info).select('.map__info_country').text(this.getAttribute('id') + situ);

        mousePosition(null)
        .then(p => {
          info.style.zIndex= 1;
          info.style.top = (p.top - 80) + 'px';
          info.style.left = (p.left - 125) + 'px';
        });


        d3.select(this).style("fill", "#536D7F");

      });

    }
  });

}
