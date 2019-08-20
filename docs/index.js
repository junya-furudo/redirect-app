var launch = function () {
  console.log('called launch!');
  console.dir(arguments)
  alert('app!');
  var e = document.getElementById('jump');
  var ev = document.createEvent('MouseEvents');
  ev.initEvent('click',true,true,document.defaultView,1,0,0,0,0,false,false,false,false,0,null);
  document.body.style.backgroundColor = '#FFFFFF';
  e.dispatchEvent(ev);
}
if (window.navigator.standalone) {
  if (document.hidden !== undefined) {
    document.addEventListener('visibilitychange', launch, false);
  } else if (document.webkitHidden !== undefined) {
    document.addEventListener('webkitvisibilitychange', launch, false);
  }
  launch();
} else {
  document.getElementById('description').style.display = '';
}
