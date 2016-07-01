$(function(){
  var counter = {
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0
  }

  $('#redButton').on('click', function(){
    counter.red += 1;
    $('#red').html('Total red: ' + counter.red);
    $('body').append('<div class="color-cube red"></div>');
  })
  $('#yellowButton').on('click', function(){
    counter.yellow += 1;
    $('#yellow').html('Total yellow: ' + counter.yellow);
    $('body').append('<div class="color-cube yellow"></div>');
  })
  $('#greenButton').on('click', function(){
    counter.green += 1;
    $('#green').html('Total green: ' + counter.green);
    $('body').append('<div class="color-cube green"></div>');
  })
  $('#blueButton').on('click', function(){
    counter.blue += 1;
    $('#blue').html('Total blue: ' + counter.blue);
    $('body').append('<div class="color-cube blue"></div>');
  })
})
