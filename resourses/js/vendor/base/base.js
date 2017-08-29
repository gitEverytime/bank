clientWidth();
function clientWidth() {
	        if ($(window).width() < 768) {
	            var deviceWidth = document.documentElement.clientWidth;
	            //鍦╠om ready浠ュ悗锛岄€氳繃浠ヤ笅浠ｇ爜璁剧疆html鐨刦ont-size:
	            if (deviceWidth > 750) deviceWidth = 750;
	            document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	        } else {
	        }
}