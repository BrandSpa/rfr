<?php

function VCRegister() {

  function subscribe_hero_vc() {
  vc_map( array(
      "name" =>  "BS Subscribe",
      "base" => "subscribe",
      "category" =>  "Structure",
      "params" => array(
         array(
            "type" => "textfield",
            "heading" =>  "Button text",
            "param_name" => "button_text",
            "value" =>  "SUBSCRIBE" ,
         ),
         array(
            "type" => "textfield",
            "heading" =>  "Classes",
            "param_name" => "class_style",
            "value" =>  "" ,
         )
      )
   ) 
  );
}

add_action( 'vc_before_init', 'subscribe_hero_vc' );
}