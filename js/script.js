window.onload = function changeback(){
    var url = window.location.href;
    var shorturl = url.slice(-6);
    document.getElementById(shorturl).style.fontWeight = 'bold';

 }