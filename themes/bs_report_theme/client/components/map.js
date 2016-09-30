'use strict';
import mousePosition from '../lib/get_mouse_position';

export default function() {

  Vue.component('map', {
    template: '#map-template',
    props: ['posts'],

    ready() {

      let comp = this;

      var info = document.querySelector('.map__info');

      console.log(this.posts);

      d3.select(".map svg g").selectAll("g").on('mouseleave', function() {
        var _this = this;
        d3.select(_this).style("fill", "").style("webkit-box-shadow", "10px 5px 5px #fff");
        info.style.zIndex= -100;
      });

      d3.select(".map svg g").selectAll("g").on('mousemove', function() {
        var _this = this;


        d3.select(info).text('country without info');

        // var postsFiltered = comp.posts.filter(function(post) {
        //   if(post['meta_country'] == _this.getAttribute('id')) {
        //     return true;
        //   }
        //   return false;
        // });
        //
        //
        // if(postsFiltered[0] && postsFiltered[0]['meta_population']) {
        //   d3.select(info).text(postsFiltered[0]['meta_population']);
        // }
        mousePosition(null)
        .then(p => {
          info.style.zIndex= 1;
          info.style.top = (p.top - 75) + 'px';
          info.style.left = (p.left - 80) + 'px';
        });



        d3.select(_this).style("fill", "#536D7F").style("webkit-box-shadow", "10px 5px 5px #fff");

      });



    }
  });

}
