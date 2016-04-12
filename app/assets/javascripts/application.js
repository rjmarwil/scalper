// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var xmlhttp = new XMLHttpRequest();
var url = "https://api.seatgeek.com/2/events/3044706";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var info = JSON.parse(xmlhttp.responseText);
    var history = [];
    var call = {};

    call.date = new Date(info.datetime_local);
    call.listing_count = info.stats.listing_count;
    call.average_price = info.stats.average_price;
    call.lowest_price = info.stats.lowest_price;
    call.highest_price = info.stats.highest_price;

    history.push(call);
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
