(function ($, Drupal) {

  'use strict';
  
  Drupal.behaviors.bitwisdomCountNodes = {
    attach: function(context) {
      console.log('global file loaded');
      
      var total = 0;
      
      $(context).find('article.node').each(function() {
        total++;
      });
      
      console.log('Found ' + total + ' nodes.');

    }
  };

 })(jQuery, Drupal);