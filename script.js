var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isWindows = /windows phone/i.test(navigator.userAgent.toLowerCase());
var isBlackberry = /blackberry/i.test(navigator.userAgent.toLowerCase());
var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());

if(isAndroid || isWindows || isBlackberry || isiDevice){
    $(".projects .btn").on('click',function(){
      alert("Hello! I am an alert box!!");
         //your code here
    });
}else{
    $(".projects .btn").on('hover',function(){
      alert("Hello! I am an alert box!!");
         //your code here
    });
}
