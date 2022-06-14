window.addEventListener('load', function () {
    //获取元素
    /* 盒子 */
    var box = document.querySelector('.box')
    /* 左右按钮 */
    var left = box.children[0]
    var right = box.children[1]
    //圆点父元素 ul
    var circle = document.querySelector('.circle')
    //轮播图片
    var imgs = document.getElementById('banner-pic')
    var banner_pic = imgs.querySelectorAll('li')
    //节流阀
    var flag = true;
    //鼠标移入，左右箭头显示
    box.addEventListener('mouseover', function () {
        left.style.display = 'block'
        right.style.display = 'block'
        clearInterval(timer)
        timer = null; // 清除定时器变量
    })
    box.addEventListener('mouseleave', function () {
        left.style.display = 'none'
        right.style.display = 'none'
        var timer = setInterval(function () {
            //手动调用点击事件
            right.click();
        }, 2000);
    })

    //动态增加li，有几个图片，就几个小圆点
    for (i = 0; i < imgs.children.length; i++) {
        var li = document.createElement('li')
        //把li插入到圆点里
        circle.appendChild(li)
        //第一个圆点为选中状态
        circle.children[0].className = 'current'
        //小圆点事件  排他
        li.addEventListener('click', function (e) {
            for (i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ''
            }
            this.className = 'current'
            /* ul里面的小点 */
            var lis = circle.querySelectorAll('li')
            //给每个小点添加自定义属性 第一个就是0 第二个是1 ....
            for (var i = 0; i < lis.length; i++) {
                lis[i].index = i;
            }
            //索引号
            var index = e.target.index
            //调用函数
            animate(imgs, -(700 * index))
            num = index;
            num1 = index;
        })
    }
    //克隆第一张图片，放到imgs最后面
    var first = imgs.children[0].cloneNode(true)
    imgs.appendChild(first)
    var num1 = 0;//小圆点计数器


    //节流阀
    var flag = true;
    //左右按钮事件
    var num = 0;
    right.addEventListener('click', function () {
        if (flag) {
            flag = false;

            num++;
            if (num == imgs.children.length) {
                imgs.style.left = 0;
                num = 1
            }
            animate(imgs, -num * 700, function () {
                flag = true;
            })

            num1++;
            for (i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ''
            }
            num1 = num1 > circle.children.length - 1 ? 0 : num1
            circle.children[num1].className = 'current'
        }

    })

    left.addEventListener('click', function () {
        if (flag) {
            flag = false;

            num--;
            if (num < 0) {
                num = imgs.children.length - 1
                imgs.style.left = -num * 700 + 'px';
            }
            animate(imgs, -num * 700, function () {
                flag = true;
            })
            num1--;
            for (i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ''
            }
            num1 = num1 < 0 ? circle.children.length - 1 : num1
            circle.children[num1].className = 'current'
        }

    })
    //定时器
    var timer = setInterval(function () {
        //手动调用点击事件
        right.click();
    }, 2000);




}
)
