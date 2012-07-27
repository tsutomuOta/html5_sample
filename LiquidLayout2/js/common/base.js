/**
 * ピクデコ共通ライブラリ
 */
var PicdecoBase;

$(function() {
	$(window).bind('load', function() {
	});
});

(function() {
	
	// constructor
	PicdecoBase = function() {
	};

	/*----------------
	 * クラスメソッド
	 ----------------*/
	/**
	 * 画像サイズ調整
	 * 
	 * @access Public
	 * @param event.data.id      : 画像のID
	 * @param event.data.width   : 画像のFit幅
	 * @param event.data.height  : 画像のFit高さ
	 * @param event.data.opacity : 画像の透明度
	 */
	PicdecoBase.fitImage = function (event) {
		var obj = $('#' + event.data.id);
		var ratioW = event.data.width / obj.width();
		var ratioH = event.data.height / obj.height();
		var width = obj.width() * Math.min(ratioW, ratioH);
		var opacity = (event.data.opacity == undefined) ? 1.0 : event.data.opacity;
		obj.css({width: width + 'px', opacity: opacity});
	};

	/*----------------
	 * クラスメソッド
	 ----------------*/
	PicdecoBase.prototype = {
	};

}());