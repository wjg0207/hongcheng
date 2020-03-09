module.exports.scroll = function () {
  // $(window).on("scroll", function () {
  //   var oScrollTop = $(window).scrollTop();
  //   if (oScrollTop > 150) {
  //     $("#navs").stop().fadeIn(200)
  //     $(".consult").stop().fadeIn(200)
  //   } else {
  //     $("#navs").stop().fadeOut(200)
  //     $(".consult").stop().fadeOut(200)
  //   }
  // })
  // $("#goTop").click(function () {
  //   $("body,html").animate({
  //     "scrollTop": 0
  //   }, 500)
  // })
  var oTop = document.getElementById("top");
  window.onscroll = function () {
    var oT = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(oT)
    if (oT > 150) {
      oTop.style.display = "block"
    } else {
      oTop.style.display = "none"
    }
  }

  oTop.onclick = function () {
    var timer = setInterval(function () {
      var oT = document.documentElement.scrollTop || document.body.scrollTop;
      window.scrollBy(0, -100);
      if (oT <= 0) {
        clearInterval(timer)
      }
    }, 30)
  }

}