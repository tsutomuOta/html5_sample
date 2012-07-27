/**
 * 定数と変数を宣言
 */
var canvas; // canvas
var canvas_context; // canvasのcontext
var image = new Image(); // 描画イメージ
var timer;

/**
 * htmlの読み込み終了時処理
 */
function didLoadHtml() {
    
    canvas = document.getElementById('canvas');
    canvas_context = canvas.getContext('2d');
    image.src = '../image/apple.jpeg';
    
    image.onload = function() {
        resizeCanvas();
    }
}

/**
 * canvasのサイズを調整する
 */
function resizeCanvas() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    drawImageCanvas();
}

/**
 * canvasへ再描画する
 */
function drawImageCanvas() {
    canvas_context.drawImage(image, 0, 0, canvas.width, canvas.height);
    //alert(canvas.width);
    //alert(canvas.height);
}

window.onresize = function() {
    resizeCanvas();
}