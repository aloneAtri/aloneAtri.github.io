// var img = document.getElementById('img01');
var body = document.body;//获取body元素
var img = document.querySelector('.background').querySelectorAll('img');//获取背景图片
var nav = document.querySelector('.nav').querySelectorAll('a');//获取导航栏
var nav1 = document.querySelector('#nav1');//下拉列表
var theme = document.querySelectorAll('.image01');

// 导航栏下拉列表
nav[2].onmousemove = function () {
    nav1.style.display = 'block';
}
nav[2].onmouseout = function () {
    nav1.style.display = 'none';
}
nav1.onmousemove = function () {
    nav1.style.display = 'block';
}
nav1.onmouseout = function () {
    nav1.style.display = 'none';
}


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
    body.style.backgroundImage = 'url(' + './background/背景' + getRandom(1, 13) + '.png)';
    // body.style.backgroundImage = 'url(' + img[getRandom(1, 13)].src + ')';
}
setInterval(time1, 5000)


// 随机数函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}