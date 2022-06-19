$(function () {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    $(".checkall").change(function () {
        // console.log($(this).prop("checked"));
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function () {
        // if(被选中的小的复选框的个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        // console.log($(".j-checkbox:checked").length);
        // $(".j-checkbox").length 这个是所有的小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })

    //3.增删按钮
    $(".increment").click(function () {
        //获取ipt里面数字的值
        var n = $(this).siblings(".itxt").val()
        //每次点击 n+1
        n++;
        if (n <= 0) n = 1
        // 把n的值加给 ipt
        $(this).siblings('.itxt').val(n)

        //  获取该商品的单价 
        var p = $(this).parent().parent().siblings(".p-price").html()
        //单价为 ￥12.6  需要去除前面字符，所以字符截取  substr()  p=12.6
        p = p.substr(1)
        //$(this).parent().parent().siblings(".p-sum")总价  =   n*p   ipt的数字*单价
        $(this).parents(".p-num").siblings(".p-sum").text('￥' + (n * p).toFixed(2))
        getSum();
    })

    $(".decrement").click(function () {
        //获取ipt里面数字的值
        var n = $(this).siblings(".itxt").val()
        //每次点击 n+1
        n--;
        //如果n<1,返回false，不再执行以下代码
        if (n < 1) return false
        //把n赋值给 ipt
        $(this).siblings('.itxt').val(n)
        //  获取该商品的单价  并且截取掉前面的￥
        var p = $(this).parent().parent().siblings(".p-price").html()
        p = p.substr(1)
        //$(this).parent().parent().siblings(".p-sum")总价  =   n*p   ipt的数字*单价
        $(this).parents(".p-num").siblings(".p-sum").text('￥' + (n * p).toFixed(2))
        getSum()
    })

    //如果用户修改ipt的值，对应的价格发生变化
    $(".itxt").change(function () {

        //获取ipt的值
        var n = $(this).val();
        //如果ipt的值等于小于0
        if (n <= 0) {
            //他的值重新为1
            $(this).val("1")
            //再次获取值
            var n = $(this).val();
            //获取单价
            var p = $(this).parents('.p-num').siblings(".p-price").html()
            //因为单价带￥，所以截取字符串
            p = p.substr(1);
            //总价
            $(this).parents(".p-num").siblings('.p-sum').text((n * p).toFixed(2))
        } else {           
            //获取单价
            var p = $(this).parents('.p-num').siblings(".p-price").html()
            //因为单价带￥，所以截取字符串
            p = p.substr(1);

            $(this).parents(".p-num").siblings('.p-sum').text((n * p).toFixed(2))
        }
    })


    //结算 //封装函数
    //结算栏的商品数量要改变
    //获取每个ipt的值，让他们相加。赋值给结算数量   
    getSum();
    function getSum() {
        var count = 0;//计算总件数
        var money = 0;//计算总金钱
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val())
        })
        $('.amount-sum em').text(count)

        $(".p-sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1))
        })
        $('.price-sum em').text('￥' + money.toFixed(2))
    }

    //删除购物车商品
    $(".p-action").click(function () {
        //每个删除按钮绑定事件，点击的时候删除自己的父元素
        $(this).parents(".cart-item").remove()
        getSum();
    })
    //清空购物车按钮
    $(".clear-all").click(function () {
        $(this).parents(".cart-floatbar").siblings(".cart-item-list").empty();
        getSum();
    })
    //删除选中商品
    $(".remove-batch").click(function () {
        $(".j-checkbox").each(function () {
            if ($(this).prop('checked') == true) {
                $(this).parents(".cart-item").remove()
            }
        })
        getSum();
    })

    //判断复选框是否被选中，计算总和







})