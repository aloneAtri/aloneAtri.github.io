var img = document.querySelector('.background').querySelectorAll('img');//获取背景图片

// var theme = document.querySelectorAll('.image01');




var mouseImg = document.querySelector('#mouse-move')//获取鼠标移动元素并创建移动事件
// 鼠标移动特效函数
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    mouseImg.style.top = y + 10 + 'px';
    mouseImg.style.left = x + 10 + 'px';

})


$(function () {
    //图片切换函数
    time1();
    // 导航栏下拉列表
    $('.nav a:eq(2)').mouseenter(function () {
        $('#nav1').show();
    });
    $('.nav a:eq(2)').mouseout(function () {
        $('#nav1').hide();
    });
    $('#nav1').mouseenter(function () {
        $(this).show();
    });
    $('#nav1').mouseout(function () {
        $(this).hide();
    });
})
function time1() {
    // body.style.backgroundImage = 'url(' + './background/背景' + getRandom(1, 13) + '.png)';
    $('body').css('backgroundImage', 'url(./background/背景' + getRandom(1, 13) + '.png)');
}
setInterval(time1, 5000)


// 随机数函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}