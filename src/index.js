$( document ).ready(function(){

  $(window).scroll(function(){
    var height = $(window).scrollTop();
    if (height < 710) {
      $('#checkout').css({
        'position': 'relative',
        'top': 'unset',
        'right': 'unset'
      });
    } else if (height >= 710 && height < 1846) {
      $('#checkout').css({
        'position': 'fixed',
        'top': '-38px',
        'right': '20%'
      });
    } else {
      $('#checkout').css({
        'position': 'relative',
        'top': '1000px',
        'right': '0px'
      });
    }
  })
});