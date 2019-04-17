$("path, circle").click(function(e) {
  var location = $(this).offset();
  //console.log(location.top);
  $('#info-box').css('display','block');
  $('#info-box').css('top',location.top - 40);
   $('#info-box').css('left',location.left);
  $('#info-box').html($(this).data('info'));
});

//use this functionality to make info box disappear when you leave that state
// $("path, circle").mouseleave(function(e) {
//   $('#info-box').css('display','none');
// });

// use this functionality to make the info box follow your mouse
// $(document).mousemove(function(e) {
//   $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
//   $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
// }).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() { 
    var link = $(this).attr('href');   
    window.open(link,'_blank');
    return false;
  });
}
