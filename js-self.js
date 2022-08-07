// var img = document.querySelector('.background').querySelectorAll('img');//获取背景图片

var mouseImg = document.querySelector('#mouse-move')//获取鼠标移动元素并创建移动事件
// 鼠标移动特效函数
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    mouseImg.style.top = y + 10 + 'px';
    mouseImg.style.left = x + 10 + 'px';

})

$(function () {
    // $('body').css('backgroundImage', 'url(./background/背景' + getRandom(1, 19) + '.png)');
    $('#bgc').css('backgroundImage', 'url(./background/背景' + getRandom(1, 19) + '.png)');

    //图片切换函数
    time1();

    // 导航栏下拉列表
    $('#theme').hover(function () {
        // over
        $('#nav1').stop().slideDown(100);
    }, function () {
        // out
        $('#nav1').stop().slideUp(100);
    }
    );

    $('#wallpaper').hover(function () {
        // over
        $('#nav2').stop().slideDown(100);
    }, function () {
        // out
        $('#nav2').stop().slideUp(100);
    }
    );

    //壁纸选项
    $('#hidewp').click(function () {
        // $('*').hide();
        $('.border').hide();
        $('.search').hide();
        $('.right-float').hide();
    })

    $("#obvious").click(function () {
        $('.border').show();
        $('.search').show();
        $('.right-float').show();

    });

})

// function time1() {
//     // body.style.backgroundImage = 'url(' + './background/背景' + getRandom(1, 13) + '.png)';
//     var i = 100;

//     //图片动态大小变化和图片切换
//     timer2 = setInterval(() => {
//         i += 0.1;
//         if (i >= 105) {
//             i = 100;
//             $('body').css('backgroundImage', 'url(./background/背景' + getRandom(1, 19) + '.png)');
//         }
//         $('body').css('backgroundSize', i + '%');
//     }, 100);

// }

function time1() {
    // body.style.backgroundImage = 'url(' + './background/背景' + getRandom(1, 13) + '.png)';
    var i = 100;
    var flag = -1;
    //图片动态大小变化和图片切换
    timer2 = setInterval(() => {
        i += 0.1;
        if (i >= 105) {
            i = 100;
            // $('#bgc').css('opacity', 1);
            // $('#bgc').fadeIn(500);
            $('#bgc').stop().fadeTo(1500, 1);
            var num = getRandom(1, 19);
            //保证图片不重复
            if (num == flag) {
                var num = getRandom(1, 19);
                $('#bgc').css('backgroundImage', 'url(./background/背景' + num + '.png)');
            }
            else {
                $('#bgc').css('backgroundImage', 'url(./background/背景' + num + '.png)');
            }
            var flag = num;
        }
        if (i >= 104) {
            $('#bgc').stop().fadeTo(500, 0.6);
        }
        $('#bgc').css('backgroundSize', i + '%');
    }, 100);

    // $('body').fadeTo(500, 0.5);
}


// 随机数函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}