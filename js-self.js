// var img = document.getElementById('img01');
var body = document.body;//获取body元素
var img = document.querySelector('.background').querySelectorAll('img');//获取背景图片

var mouseImg = document.querySelector('#mouse-move')//获取鼠标移动元素并创建移动事件
// 鼠标移动特效函数
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    mouseImg.style.top = y + 10 + 'px';
    mouseImg.style.left = x + 10 + 'px';

})

//图片切换函数
time1();
function time1() {
    // body.style.backgroundImage = 'url(' + './background/背景' + getRandom(1, 12) + '.png)';
    body.style.backgroundImage = 'url(' + img[getRandom(1, 13)].src + ')';
}
setInterval(time1, 5000)


// 随机数函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}