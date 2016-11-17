 <?php $current_url = esc_url($_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']); ?>
 <a href="javascript:" id="return-to-top"><i class="ion-chevron-up"></i></a>

<div class="bs_share" >
  <div class="bs_share__fb">
    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $current_url ?>" target="blank">
      <svg width="10px" height="18px" viewBox="14 10 10 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M22.5905382,13.5853299 C22.7059896,13.6084201 22.8329861,13.5853299 22.9368924,13.516059 C23.0407986,13.4467882 23.1100694,13.3313368 23.1216146,13.2158854 L23.4333333,10.9645833 C23.4564236,10.7567708 23.3294271,10.5374132 23.1100694,10.4796875 C22.3019097,10.2487847 21.4244792,10.1333333 20.5124132,10.1333333 C17.753125,10.1333333 16.4138889,11.4494792 16.4138889,14.1741319 L16.4138889,15.3632812 L15.0053819,15.3632812 C14.762934,15.3632812 14.5666667,15.5595486 14.5666667,15.8019965 L14.5666667,18.1110243 C14.5666667,18.3650174 14.762934,18.5612847 15.0053819,18.5612847 L16.4138889,18.5612847 L16.4138889,27.4279514 C16.4138889,27.6703993 16.6101562,27.8666667 16.8526042,27.8666667 L19.7388889,27.8666667 C19.9697917,27.8666667 20.166059,27.6703993 20.166059,27.4279514 L20.166059,18.5612847 L22.4981771,18.5612847 C22.7290799,18.5612847 22.9138021,18.3765625 22.9368924,18.1456597 L23.0985243,15.8366319 C23.1100694,15.7096354 23.0638889,15.594184 22.9830729,15.5018229 C22.9022569,15.4094618 22.7868056,15.3632812 22.6713542,15.3632812 L20.166059,15.3632812 L20.166059,14.347309 C20.166059,13.5853299 20.246875,13.4006076 21.0319444,13.4006076 C21.4822049,13.4006076 22.0940972,13.4814236 22.5905382,13.5853299 Z" id="facebook-ico" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path>
      </svg>
    </a>
  </div>

  <div class="bs_share__tw">
    <a href="https://twitter.com/intent/tweet?text=<?php echo $current_url ?>" target="blank">
      <svg width="22px" height="18px" viewBox="8 50 22 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M29.2768472,52.9090652 C29.2768472,52.7240129 29.1244512,52.5607314 28.9285135,52.5607314 C28.8196592,52.5607314 28.0685646,52.8764089 27.8726268,52.930836 C28.1338771,52.626044 28.7325758,51.7007825 28.7325758,51.308907 C28.7325758,51.1238547 28.5801798,50.9605733 28.384242,50.9605733 C28.3298149,50.9605733 28.2645023,50.9823441 28.2100751,51.0150004 C27.4698659,51.4177613 26.762313,51.7334388 25.9350203,51.9076056 C25.1186131,51.1238547 24.0082993,50.6666667 22.8653292,50.6666667 C20.4487638,50.6666667 18.4676156,52.6369294 18.4676156,55.0643802 C18.4676156,55.2385471 18.478501,55.4235994 18.5111573,55.5977663 C16.1163628,55.3909431 13.841308,54.3894836 12.0560976,52.7893254 C11.6206804,52.39745 11.2505758,51.9729182 10.8587003,51.537501 C10.7716169,51.4395322 10.6954188,51.4068759 10.5647937,51.4068759 C10.445054,51.4068759 10.3470851,51.4939593 10.2926579,51.5810428 C9.90078248,52.1579705 9.69395932,53.0941175 9.69395932,53.790785 C9.69395932,54.8031299 10.0422931,55.793704 10.6954188,56.577455 C10.4885957,56.5121424 10.1729182,56.3053192 9.98786592,56.3053192 C9.7592719,56.3053192 9.56333416,56.4686007 9.56333416,56.6971947 C9.56333416,58.2211548 10.4015122,59.6362607 11.6859929,60.4308971 C11.5880241,60.4200116 11.5009406,60.3873553 11.4029718,60.3873553 C11.2179195,60.3873553 11.0655235,60.5506368 11.0655235,60.7248037 C11.0655235,60.7683454 11.0764089,60.8010017 11.0872943,60.8445434 C11.5662532,62.3140764 12.7636505,63.4243902 14.2658398,63.772724 C13.0357862,64.534704 11.6206804,64.9265795 10.1838037,64.9265795 C9.85724076,64.9265795 9.53067787,64.8721524 9.21500042,64.8721524 C9.01906268,64.8721524 8.86666667,65.0354338 8.86666667,65.2204861 C8.86666667,65.3402258 8.93197924,65.4381947 9.02994811,65.5143927 C9.31296928,65.7212159 9.66130303,65.8953827 9.97698049,66.0586642 C11.6533367,66.9294986 13.5256306,67.3866866 15.4196953,67.3866866 C20.1657426,67.3866866 24.2260079,64.8394961 26.1853852,60.5070951 C26.8929382,58.9504786 27.3065845,57.2414662 27.2739282,55.5324537 L27.2739282,55.1732345 C28.0141374,54.6180776 28.7325758,53.8996393 29.2224201,53.1050029 C29.2550764,53.0505758 29.2768472,52.9852632 29.2768472,52.9090652 L29.2768472,52.9090652 Z" id="twiiter-ico" stroke="none" fill="#1A2127" fill-rule="evenodd"></path>
      </svg>
    </a>
  </div>
</div>

<div id="footer">
  <div class="col-md-9 footer__top">
  <div class="col-md-1"></div>
  <div class="footer__menu col-md-11">
    <?php
      $args = array(
        'theme_location' => 'main',
        'container' => false,
        'echo' => true
      );
      
      $menu = wp_nav_menu( $args);
     ?>
   </div>

  </div>

  <div class="col-md-3 footer__bottom">
    <div class="footer__bottom-left col-md-12">
      <h4 style="text-transform: uppercase" class="color-red"><?php echo gett('Contact') ?></h4>
      <?php echo get_option('contact_info_' . str_replace(' ', '_', getOfficeCountry()) ) ?>
    </div>
    
    <div class="footer__bottom-middle col-md-12">
      <a href="<?php echo gett('http://religious-freedom-report.org/privacy-policy/') ?>"><?php echo gett('PRIVACY POLICY') ?></a>
      <a href="<?php echo gett('http://religious-freedom-report.org/terms-and-conditions/') ?>"><?php echo gett('TERMS & CONDITIONS') ?></a>
    </div>
  </div>
  
  <div class="col-md-12 bs-logo">
    <a href="http://brandspa.com" target="blank" class="pull-right">
      <img src="<?php echo get_template_directory_uri() .'/public/img/bs.png' ?>" width="150" >
    </a>
  </div>

</div>
 
  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script src="http://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://cdn.jsdelivr.net/flexslider/2.6.3/jquery.flexslider.js"></script>
   <script>
    var bs = {};
    bs['geo'] = JSON.parse(JSON.stringify(<?php echo json_encode(geoip_detect2_get_info_from_current_ip()); ?>));
    bs['langs'] = JSON.parse(JSON.stringify(<?php echo json_encode(pll_the_languages(array('raw'=>1))) ?>));
  </script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.1/es6-shim.js"></script>
  <script src="<?php echo get_template_directory_uri() . '/public/js/app.js' ?>"></script>


<?php wp_footer() ?>

</body>
</html>
