// apiready = function(){
	 (function () {
        var  styleN = document.createElement("style");
        var width = document.documentElement.clientWidth/750;
        styleN.innerHTML = 'html{font-size:'+(100 * width)+'px!important}';
        document.head.appendChild(styleN);
    })();
// }
