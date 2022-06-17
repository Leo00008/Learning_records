function animate(obj, target, callback) {
    //先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值写到定时器里面
        //把我们步长值改为整数，不要出现小数的问题    
        var step = (target - obj.offsetLeft) / 10;
        //如果向右走就向上取整，向左走就向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            if (callback) {
                callback();//调用函数
                
            }
        }
        else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 10);
}
