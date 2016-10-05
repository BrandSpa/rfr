'use strict';
import mousePosition from '../lib/get_mouse_position';

export default function() {

  Vue.component('map', {
    template: '#map-template',
    props: ['posts', 'items'],
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

      gs.on('click', function() {
        window.location = '/report/' + this.getAttribute('id').toLowerCase().replace(' ', '-');
      });

      gs.on('mousemove', function() {
        let pst = instance.posts.filter(post => post.meta_country == this.getAttribute('id') );
        let situations = {
          '#FF362F': 'Persecution',
          '#FF362F': 'Persecution',
        };

        let situ = pst.meta_situation ? pst.meta_situation : '';

        d3.select(info).select('.map__info_country').text(this.getAttribute('id') + situ);

        mousePosition(null)
        .then(p => {
          info.style.zIndex= 1;
          info.style.top = (p.top - 40) + 'px';
          info.style.left = (p.left - 300) + 'px';
        });

        d3.select(this).style("transition", "all 300ms ease");
        d3.select(this).style("fill", "#536D7F");

      });

    },

    methods: {
      search() {

        if(this.country.length > 3) {
          this.items = this.posts.filter(pst => pst.meta_country.toLowerCase().indexOf(this.country.toLowerCase()) != -1 );
        }

      }
    }
  });

}
