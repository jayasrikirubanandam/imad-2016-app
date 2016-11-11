console.log('Loaded!');
var img=document.getelementbyid('madi');
img.onclick=function(){
    img.style.marginleft='100px';
};
var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {

  showText("#msg", "hi", text, 500);   

});


