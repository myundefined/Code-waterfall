(function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d"); //创建画笔（2D）

  //获取当前浏览器的宽高并定义给画布
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  //字体大小
  var fontSize = 16;

  var colunms = Math.floor(W / fontSize); //计算列
  var drops = [];

  for (var i = 0; i < colunms; i++) {
    drops[i] = 1;
  }

  var str = "Javascript function(){}";

  //画图函数
  function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)"; //填充画布背景
    context.fillRect(0, 0, W, H);
    context.font = "700 " + fontSize + "px 微软雅黑";
    //context.fillStyle = randColor(); //填充画笔为彩色
    context.fillStyle = "#00cc33"; //填充画笔为绿色

    //
    for (var i = 0; i < colunms; i++) {
      var index = Math.floor(Math.random() * str.length);
      var x = i * fontSize;
      var y = drops[i] * fontSize;
      context.fillText(str[index], x, y);
      if (y >= H && Math.random() > 0.99) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  function randColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  draw();
  setInterval(draw, 20);
})();
