$(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 150) {
        $(".buttonHome").addClass("buttonHomeVisible");
        $(".buttonHome").removeClass("buttonHomeNotVisible");
        console.log('MAYOR 150');
      } else {
        $(".buttonHome").removeClass("buttonHomeVisible");
        $(".buttonHome").addClass("buttonHomeNotVisible");
      }
    });
  });