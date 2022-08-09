$(function () {

    // 轮播图
    $('#right-arrow,#left-arrow,#turn-box').stop().hide();
    // 轮播图左右箭头
    $('#left-box1').hover(function () {
        // over
        $('#right-arrow,#left-arrow,#turn-box').stop().show();
    }, function () {
        // out
        $('#right-arrow,#left-arrow,#turn-box').stop().hide();
    }
    );

    $('#turn-img li div').eq(0).css('background-image', 'linear-gradient(35deg,yellow, orange)');

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


    // $('.box1').hide();

    // $('.box1').scrollTop(function () {
    //     $(this).show();
    // });


    // $('.box1').hover(function () {
    //     // over
    //     $(this).stop().slideDown(100);
    // }, function () {
    //     // out
    //     $(this).stop().slideUp(100);
    // }
    // );



})