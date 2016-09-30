<?php
  include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/religions.php';
  include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/religions_colors.php';

  function report_religion_subcategories($post) {
    $report_religion = get_post_meta($post->ID, 'report_religion_key', true);
  ?>
  <style>
    div[class^="sub-"], div[class*=" sub-"] {
      margin-left: 20px;
    }
  </style>
  <h3>Religion</h3>
  <hr>
  <?php if(is_array($report_religion) && count($report_religion) > 0): ?>

    <div id="container" style="width: 100%; height: 400px; margin: 0 auto"></div>
<script>
var $ = jQuery;
  var ob = <?php echo json_encode($report_religion) ?>;
  var colors = <?php echo json_encode(getReligionsColors()) ?>



  $(function() {
    var categories = Object.keys(ob).map(function(key) {
      return ob[key].name;
  } );

var data = Object.keys(ob).map(function(key) {
  var neo = {};
  neo['y'] = parseFloat(ob[key].percent);

  neo['color'] = colors[ob[key].name];

  var drilldown = {};
  drilldown['color'] = colors[ob[key].name];
  drilldown['name'] = ob[key].name;

  var categories = [];

  var data = [];

  if(typeof ob[key].sub == "object") {
    categories = Object.keys(ob[key].sub).map(function(subkey) {
      return ob[key]['sub'][subkey]['name'];
    });

    data = Object.keys(ob[key].sub).map(function(subkey) {
      return parseFloat(ob[key]['sub'][subkey]['percent']);
    });

  } else {

    if(ob[key].sub && ob[key].sub.isArray()) {
      categories = ob[key].sub.map(function(sub) {
        return sub['name'];
      });

      data = ob[key].sub.map(function(sub) {
        return parseFloat(sub['percent']);
      });

    } else {
      //if doesn't have any sub add the same data
      categories = [].concat([ob[key].name]);
      data = [].concat([ parseFloat(ob[key].percent) ]);
    }

  }

  drilldown['categories'] = categories;

  drilldown['data'] = data;

 neo['drilldown'] = drilldown;

return neo;
});

  var browserData = [];
  var versionsData = [];
  var i;
  var j
  var dataLen = data.length;
    var brightness;

// Build the data arrays
  for (i = 0; i < dataLen; i += 1) {

      // add browser data
      browserData.push({
          name: categories[i],
          y: data[i].y,
          color: data[i].color
      });

      // add version data
      drillDataLen = data[i].drilldown.data.length;
      for (j = 0; j < drillDataLen; j += 1) {
          brightness = 0.2 - (j / drillDataLen) / 5;
          versionsData.push({
              name: data[i].drilldown.categories[j],
              y: data[i].drilldown.data[j],
              color:  Highcharts.Color(data[i].color).brighten(brightness).get()
          });
      }
  };

  // Create the chart
  $('#container').highcharts({
      chart: {
          type: 'pie'
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
          data: browserData,
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
          data: versionsData,
          size: '80%',
          innerSize: '60%',
          dataLabels: {
              formatter: function () {
                  // display only if larger than 1
                  return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
              }
          }
      }]
  });
  })
</script>

  <?php foreach ($report_religion as $mainkey => $religion): ?>
    <div class="<?php echo 'main-' . $mainkey ?>">
        <p>
          <select name="report_religion[<?php echo $mainkey ?>][name]">
            <option value="<?php echo $religion['name'] ?>"><?php echo $religion['name'] ?></option>
            <?php foreach (getReligions() as $key => $value): ?>
                <option value="<?php echo $value ?>"><?php echo $value ?></option>
            <?php endforeach; ?>
          </select>

          <input type="text" name="report_religion[<?php echo $mainkey ?>][percent]" placeholder="percent" value="<?php echo $religion['percent'] ?>">
          <button class="button" onClick="removeEl(event, this, '<?php echo 'main-' . $mainkey ?>')">Remove</button>
        </p>

    <div class="<?php echo 'sub-' . $mainkey?>">

    <?php
      if(is_array($religion['sub'])):
      foreach ($religion['sub'] as $subkey => $sub):
    ?>

        <p class="<?php echo 'sub-' . $mainkey .'-'. $subkey ?>">
          <select name="report_religion[<?php echo $mainkey ?>][sub][<?php echo $subkey ?>][name]">
            <option value="<?php echo $sub['name'] ?>"><?php echo $sub['name'] ?></option>
            <?php foreach (getReligions() as $key => $value): ?>
                <option value="<?php echo $value ?>"><?php echo $value ?></option>
            <?php endforeach; ?>
          </select>

          <input
            type="text"
            name="report_religion[<?php echo $mainkey ?>][sub][<?php echo $subkey ?>][percent]"
            placeholder="percent"
            value="<?php echo $sub['percent'] ?>"
          >

          <button
            class="button btn-remove-religion"
            onClick="removeEl(event, this, '<?php echo 'sub-' . $mainkey .'-'. $subkey ?>')">
            Remove subcategory
          </button>
        </p>
    <?php endforeach; endif; ?>

    </div>
    <button class="button" onClick="addSubcategoryReligion(event, this, '<?php echo $mainkey  ?>')"> Add subcategory </button>
    </div>

  <?php endforeach; ?>

  <?php else: ?>
    <div class="main-0">
      <p>
        <select name="report_religion[0][name]">
          <option value="">Select Religion</option>
          <?php foreach (getReligions() as $key => $value): ?>
              <option value="<?php echo $value ?>"><?php echo $value ?></option>
          <?php endforeach; ?>
        </select>

        <input
          type="text"
          name="report_religion[0][percent]"
          placeholder="percent">
      </p>

      <div class="sub-0">
        <p>
          <select name="report_religion[0][sub][0][name]">
            <option value="">Select Religion</option>
            <?php foreach (getReligions() as $key => $value): ?>
                <option value="<?php echo $value ?>"><?php echo $value ?></option>
            <?php endforeach; ?>
          </select>
          <input
            type="text"
            name="report_religion[0][sub][0][percent]"
            placeholder="percent">
        </p>
      </div>

      <button class="button" onClick="addSubcategoryReligion(event, this, 0)"> Add subcategory </button>
    </div>

  <?php endif; ?>

  <script type="text" id="religion-main-template">
    <div class='main-mainkey'>
      <p>
      <select name="report_religion[mainkey][name]">
        <option value="">Select Religion</option>
        <?php foreach (getReligions() as $key => $value): ?>
            <option value="<?php echo $value ?>"><?php echo $value ?></option>
        <?php endforeach; ?>
      </select>

        <input
          type="text"
          name="report_religion[mainkey][percent]"
          placeholder="percent">
            <button class="button" onClick="removeEl(event, this, 'main-mainkey')">Remove</button>
      </p>

      <div class='sub-mainkey'>

      </div>
      <button class="button" onClick="addSubcategoryReligion(event, this, mainkey)"> Add subcategory </button>
    </div>
  </script>

  <script type="text" id="religion-sub-template">
    <p class="sub-mainkey-subkey">

    <select name="report_religion[mainkey][sub][subkey][name]">
      <option value="">Select Religion</option>
      <?php foreach (getReligions() as $key => $value): ?>
          <option value="<?php echo $value ?>"><?php echo $value ?></option>
      <?php endforeach; ?>
    </select>

      <input
        type="text"
        name="report_religion[mainkey][sub][subkey][percent]"
        placeholder="percent"
      >

      <button
        class="button btn-remove-religion"
        onClick="removeEl(event, this, 'sub-mainkey-subkey')">
        Remove subcategory
      </button>
    </p>
  </script>
    <div class="append-religion"></div>
    <p>
      <button class="button" onClick="addReligion(event, this)">Add Religion</button>
    </p>

    <script type="text/javascript">
      var $ = jQuery;

      var religionMain = $('#religion-main-template').html();
      var religionSub = $('#religion-sub-template').html();
      var religionContainer = $('.append-religion');

      function removeEl(evt, el, name) {
        evt.preventDefault();
        $(el).off();
        $('.' + name).remove();
      }

      function addReligion(evt, el) {
        evt.preventDefault();
        var religionMainCount = $('[class*="main-"]').length;

        var mainkey = (religionMainCount + 1);
        religionContainer.append(religionMain.replace(/mainkey/g, mainkey));

        $(document).find('.sub-'+ mainkey).append( religionSub.replace(/mainkey/g, mainkey).replace(/subkey/g, 0) );
      }

      function addSubcategoryReligion(evt, el, mainkey) {
        evt.preventDefault();
        var religionSubCount = $('.sub-' + mainkey + ' p').length;
        var subkey = (religionSubCount + 1);
        $(document).find('.sub-'+ mainkey).append( religionSub.replace(/mainkey/g, mainkey).replace(/subkey/g, subkey) );
      }

    </script>

  <?php
  }

 ?>
