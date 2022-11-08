$(function () {

    var index = 0;
    // 轮播图
    $('#right-arrow,#left-arrow').stop().hide();
    // 轮播图左右箭头
    $('#left-box1').hover(function () {
        // over
        $('#right-arrow,#left-arrow').stop().show();
    }, function () {
        // out
        $('#right-arrow,#left-arrow').stop().hide();
    }
    );

    // 轮播图点击切换功能
    $('#right-arrow').click(function (e) {
        index++;
        if (index >= 5) {
            index = 0;
            translatex = -index * 700;
            $('#turn-img li').siblings().children().css('background-image', '');
            $('#turn-img li').eq(0).children().css('background-image', 'linear-gradient(35deg,yellow, orange)');
            $('#lunbo-list').css('transition', 'none');
            $('#lunbo-list').css('transform', 'translateX(' + translatex + 'px)');
        }
        else {
            turnPlay();
        }
    });

    $('#left-arrow').click(function (e) {
        index--;
        if (index < 0) {
            index = 3;
            translatex = -index * 700;
            $('#turn-img li').siblings().children().css('background-image', '');
            $('#turn-img li').eq(3).children().css('background-image', 'linear-gradient(35deg,yellow, orange)');
            $('#lunbo-list').css('transition', 'none');
            $('#lunbo-list').css('transform', 'translateX(' + translatex + 'px)');
        } else {
            turnPlay();
        }
    });

    // 初始化小圆圈
    $('#turn-img li div').eq(0).css('background-image', 'linear-gradient(35deg,yellow, orange)');

    // 小圆圈切换图片
    $('#turn-img li').hover(function () {
        // over
        clearInterval(timer);
        timer = null;
        $(this).siblings().children().css('background-image', '').css('transform', '');
        $(this).children().css('background-image', 'linear-gradient(35deg,yellow, orange)').css('transform', 'scale(1.1)');
        index = $(this).children().attr('data-index');
        var translatex = -index * 700;
        $('#lunbo-list').css('transition', 'all 0.5s');
        $('#lunbo-list').css('transform', 'translateX(' + translatex + 'px)');
    }, function () {
        // out
        timer = setInterval(() => {
            index++;
            turnPlay();
        }, 3000);
    }
    );

    //轮播图滚动
    var timer = setInterval(() => {
        index++;
        turnPlay();
    }, 3000);

    //取消过度，无缝衔接
    document.querySelector('#lunbo-list').addEventListener('transitionend', function () {
        if (index == 4) {
            index = 0;
            $('#lunbo-list').css('transition', 'none');
            var translatex = -index * 700;
            $('#lunbo-list').css('transform', 'translateX(' + translatex + 'px)');
        }
    })

    // 监听轮播图，防止切换标签轮播图失效
    // 回来到当前页面，清除残留定时器的影响，执行定时器
    window.onfocus = function () {
        clearInterval(timer);
        timer = setInterval(() => {
            index++;
            turnPlay();
        }, 3000);
    }
    // 离开当前页面清除定时器，避免定时器生成堆积
    window.onblur = function () {
        clearInterval(timer);
    }

    //跳转进入注册页面
    $('.button:eq(2)').click(function () {
        window.location.href = "register.html";
    })

    //输入选取
    $('input').focus(function () {
        if (this.value == '输入搜索内容')
            this.value = '';
    })

    //快捷搜索
    document.addEventListener('keyup', function (e) {
        if (e.key == 's') {
            $('#search').focus();
        }
    })

    $('#load').click(function (e) {
        if ($('#username').val() == '' || $('#password').val() == '') {
            alert('账号密码不能为空');
            e.preventDefault();
        }
    });

    $('#register').click(function () {
        window.location.href = "register.html";
    })

    // 切换图片函数
    function turnPlay() {
        var translatex = -index * 700;
        $('#lunbo-list').css('transition', 'all 0.5s');
        $('#lunbo-list').css('transform', 'translateX(' + translatex + 'px)');
        if (index >= 4) {
            $('#turn-img li').siblings().children().css('background-image', '').css('transform', '');
            $('#turn-img li').eq(0).children().css('background-image', 'linear-gradient(35deg,yellow, orange)').css('transform', 'scale(1.1)');
        }
        else {
            $('#turn-img li').siblings().children().css('background-image', '').css('transform', '');
            $('#turn-img li').eq(index).children().css('background-image', 'linear-gradient(35deg,yellow, orange)').css('transform', 'scale(1.1)');
        }
    }


})