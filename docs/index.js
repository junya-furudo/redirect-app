var launch = function () {
  var e = document.getElementById('jump');
  var ev = document.createEvent('MouseEvents');
  ev.initEvent('click',true,true,document.defaultView,1,0,0,0,0,false,false,false,false,0,null);
  document.body.style.backgroundColor = '#FFFFFF';
  e.dispatchEvent(ev);
}
var showSplash = function () {
  var elem = document.getElementById('splash');
  if (elem.classList.contains("splash-visible")) {
    elem.classList.remove("splash-visible");
  }
  setTimeout(() => {
    elem.classList.add('splash-visible');
  }, 100);
}

if (window.navigator.standalone) {
  if (document.hidden !== undefined) {
    document.addEventListener('visibilitychange', showSplash, false);
  } else if (document.webkitHidden !== undefined) {
    document.addEventListener('webkitvisibilitychange', showSplash, false);
  }
  splash.addEventListener('transitionend', () => {
    var elem = document.getElementById('splash');
    if (elem.classList.contains("splash-visible")) {
      setTimeout(launch, 500);
    }
  }, false);
  showSplash();
} else {
  document.getElementById('description').style.display = '';
}
