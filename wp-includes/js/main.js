/* global Zepto,rbconf,createjs,rbapi, r, Bone */
var totalPage=4;
var oldPage;
var Workspace;
Zepto(function() {
  picsPreLoaded(imgarr, function() {
    Zepto('.loading').css({'background-color': 'transparent'});
    showLoading(false);
    init();
  }, function(e) {
    var progress = Math.round(e.loaded * 100);
    Zepto('#progress').text(progress+'%');
  });
});
var imgarr=[
'1.png',
];
var picUrl = 'wp-includes/images/';
var loader;
  // var sndSlide=new buzz.sound(rbconf.cdnPrefix+'media/slide.mp3');
function picsPreLoaded(imgArr, completeHandle, progressHandle) {
  var manifest = [];
  for (var i = imgArr.length - 1; i >= 0; i--) {
    manifest.push({
      src: picUrl + imgArr[i],
      id: picUrl + imgArr[i],
    });
  }
  // manifest.push({src:rbconf.cdnPrefix+'media/slide.mp3'});
  loader = new createjs.LoadQueue(false);
  loader.on('complete', completeHandle, this);
  loader.on('progress', progressHandle, this);
  loader.loadManifest(manifest);
}
function init() {

}
function showLoading(bl) {
  if (bl) {
    Zepto('.loading').show();
  } else {
    Zepto('.loading').hide();
  }
}

var mySwiper2 = new Swiper('#swiper2', {
    autoplay: { delay: 1000 },//滚动停留时间
    direction: 'vertical',//方向
    loop: true,//循环
    speed: 1000,//滚动速度
    slidesPerView: 1,//slide可见数量
})
