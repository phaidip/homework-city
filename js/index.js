$(document).ready(function(){

  function enter(event) {
    event.preventDefault(); //prevent default action

//user enters city name
//on click submit-btn update the background image of the page based on users input
// update the background based on the users input

    $('#city-type').change(function(){
    var city = $('#city-type').val()
      //if user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    if (city == "New York" || city == "New York City" || city == "NYC"){
       $('background image').attr('images/nyc.jpg');
      //if user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    } else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
       $('background image').attr('images/sf.jpg');
      //if user submits "LA" or "Los Angeles" or "LAX" make the background of the page la.jpg
    } else if (city == "LA" || city == "Los Angeles" || city == "LAX") {
       $('background image').attr('images/la.jpg');
      //if user submits "Austin" or "ATX" make the background of the page austin.jpg
    } else if (city == "Austin" || city == "ATX") {
       $('background image').attr('images/austin.jpg');
      //if user submits "Sydney" or "SYD" make the background of the page sydney.jpg
    } else if (city == "Sydney" || city =="SYD") {
      $('background image').attr('images/sydney.jpg');
    }

    $('#submit-btn').on('click', changeImage);
});
