$(function () {

    // var mouseImg = document.querySelector('#mouse-move')//获取鼠标移动元素并创建移动事件
    // // 鼠标移动特效函数
    // document.addEventListener('mousemove', function (e) {
    //     var x = e.pageX;
    //     var y = e.pageY;
    //     mouseImg.style.top = y + 10 + 'px';
    //     mouseImg.style.left = x + 10 + 'px';

    // })

    // 导航栏下拉列表
    $('#theme').hover(function () {
        // over
        $('#nav1').stop().slideDown(100);
    }, function () {
        // out
        $('#nav1').stop().slideUp(100);
    }
    );

    //隐藏/显示壁纸
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
    })

    $("#obvious").click(function () {
        $('.border').show();
    });
    //屏蔽右键
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    })
    // 密码提示区域
    var password = document.querySelector('.password');
    var message = document.querySelector('.message');
    password.onblur = function () {
        if (this.value.length < 6) {
            message.innerHTML = '密码不能少于6位数';
        }
        if (this.value.length >= 6) {
            message.innerHTML = '当前的密码可以使用';
        }
    }
})