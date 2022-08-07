$(function () {
    //跳转进入注册页面
    $('.button:eq(2)').click(function () {
        window.location.href = "register.html";
    })

    //输入选取
    $('input').focus(function () {
        if (this.value == '输入搜索内容')
            this.value = '';
    })

})