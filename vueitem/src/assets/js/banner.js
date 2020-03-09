var Baner = {
  fn: function () {
    var oBanner = document.getElementById("banner");
    var oBannerImg = document.getElementById("banner_img");
    var oImgs = oBannerImg.getElementsByTagName("li");
    var oPrev = document.getElementById("prev");
    var oNext = document.getElementById("next");
    var timers = null;
    var num = 0;

    function Fn() {
      for (var i = 0; i < oImgs.length; i++) {
        oImgs[i].className = "";
      }
      oImgs[num].className = "now";
    }
    oNext.onclick = function () {
      num++;
      if (num > oImgs.length - 1) {
        num = 0;
      }
      Fn();
    }
    oPrev.onclick = function () {
      num--;
      if (num < 0) {
        num = oImgs.length - 1;
      }
    }
    timers = setInterval(function () {
      oNext.onclick()
    }, 2000);
    oBanner.onmouseenter = function () {
      clearInterval(timers);
    }
    oBanner.onmouseleave = function () {
      timers = setInterval(function () {
        oNext.onclick()
      }, 2000);
    }
  }
}
export default {
  Baner
}