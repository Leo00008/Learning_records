window.addEventListener('load', function () {
    var fs = document.querySelector('.title').querySelector('.focus')
    var ul = fs.querySelector('ul')
    var lis = ul.querySelectorAll('li')
    var ol = document.querySelector('.circle')
    var w = lis[0].offsetWidth;
    var flag = false;
    //根据图片数量添加小圆点
    for (i = 0; i < lis.length - 2; i++) {
        var li = document.createElement('li')
        ol.appendChild(li);
        ol.children[0].className = 'current'
    }

    var num = 0;

    //添加定时器
    var timer = setInterval(function () {
        num++;
        //添加过渡
        ul.style.transition = 'all 1s'
        //移动距离
        var translatex = -num * w;
        ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000)
    //过度完成之后，再执行
    ul.addEventListener('transitionend', function () {
        //无缝滚动
        if (num >= ol.children.length) {
            num = 0
            //清除过渡
            ul.style.transition = 'none'
            var translatex = -num * w;
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }

        ol.querySelector('.current').classList.remove('current')
        // for (i = 0; i < ol.children.length; i++) {
        //     ol.children[i].className = ''
        // }
        // ol.children[num].className='current'
        //classList.add  不需要加.  后面追加
        //小圆点跟随变化
        ol.children[num].classList.add('current')
    })

    //手指拖动图片事件
    var finger_X = 0
    var move_X = 0;

    ul.addEventListener('touchstart', function (e) {
        finger_X = e.targetTouches[0].pageX
        box_X = this.offsetLeft
        clearInterval(timer)
    })
    ul.addEventListener('touchmove', function (e) {
        //计算移动距离
        move_X = e.targetTouches[0].pageX - finger_X
        //移动盒子：原来的位置+手指移动的距离
        var translatex = -num * w + move_X;
        //取消过度
        ul.style.transition = 'none'
        ul.style.transform = 'translateX(' + translatex + 'px)'
        e.preventDefault();
        flag = true;
    })

    ul.addEventListener('touchend', function (e) {
        if (flag) {
            if (
                // (1):如果移动距离大于50像素，我们就播放上一张或者下一张
                Math.abs(move_X) > 50) {
                //如果是右划，播放上一张。为正值
                if (move_X > 0) {
                    num--;
                } //如果是左划，播放下一张。为负值
                else {
                    num++;
                }
                var translatex = -num * w;
                ul.style.transition = 'all 1s'
                ul.style.transform = 'translateX(' + translatex + 'px)'
            } else {
                var translatex = -num * w;
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translateX(' + translatex + 'px)'
            }
            flag = false;
        }

        clearInterval(timer);
        timer = setInterval(function () {
            num++;
            //添加过渡
            ul.style.transition = 'all 1s'
            //移动距离
            var translatex = -num * w;
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }, 2000)
    })

    //TOP事件
    var top = document.querySelector('.nav').querySelector('.top')
    var body = document.body
    window.addEventListener('scroll', function () {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 500) {
            top.style.display = 'block'

            top.addEventListener('click',function(){
                window.scrollTo({
                    top:0 ,
                    behavior:'smooth'
                })
            })
        }else{
            top.style.display = 'none'
        }

    })




})

