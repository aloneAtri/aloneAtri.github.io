var img = document.querySelector('.background').querySelectorAll('img');//获取背景图片

var mouseImg = document.querySelector('#mouse-move')//获取鼠标移动元素并创建移动事件
// 鼠标移动特效函数
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    mouseImg.style.top = y + 10 + 'px';
    mouseImg.style.left = x + 10 + 'px';

})

$(function () {
    $('body').css('backgroundImage', 'url(./background/背景' + getRandom(1, 19) + '.png)');
    //图片切换函数
    time1();

    // 导航栏下拉列表
    $('#theme').mouseover(function () {
        $('#nav1').show();
    });
    $('#theme').mouseout(function () {
        $('#nav1').hide();
    });

    // setInterval(time1, 5000);
})

function time1() {
    // body.style.backgroundImage = 'url(' + './background/背景' + getRandom(1, 13) + '.png)';
    var i = 100;
    $('body').css('backgroundImageOpacity', 50 + '%');
    //图片动态大小变化和图片切换
    timer2 = setInterval(() => {
        i += 0.1;
        if (i >= 105) {
            i = 100;
            $('body').css('backgroundImage', 'url(./background/背景' + getRandom(1, 19) + '.png)');
        }
        $('body').css('backgroundSize', i + '%');
    }, 100);
}


// 随机数函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}