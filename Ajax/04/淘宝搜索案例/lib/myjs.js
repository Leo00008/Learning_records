window.onload = function () {
    //获取搜索建议
    var list = document.querySelector("#suggest-list")
    //获取输入框
    var iptSearch = document.querySelector("#ipt")
    //输入框绑定事件  keyup 


    //1.定义一个延时器id
    var timer = null;
    //定义一个空对象，缓存以前的搜索结果
    var cache = {}

    //2.定义防抖函数
    function debounce(content) {
        timer = setTimeout(function () {
            getSuggestList(content)
        }, 500)
    }
    //每次按键抬起的时候，先重置一下延时器，在事件最后再去调用这个延时器函数

    iptSearch.addEventListener('keyup', function () {
        //清空延时器
        clearTimeout(timer)

        //获取输入框的内容并且去除两端空格
        var content = iptSearch.value.trim()

        //如果输入的内容为空， flase
        if (content.length <= 0) {
            list.style.display = 'none'
        }

        //先判断缓存有没有数据
        if (cache[content]) {
            return html(cache[content])
        }

        // getSuggestList(content)
        debounce(content)
    })


    function getSuggestList(content) {
        $.ajax({
            type: 'GET',
            url: 'https://suggest.taobao.com/sug?q=' + content,

            //如果要使用ajax发送跨域请求，必须使用dataType: 'jsonp',
            dataType: 'jsonp',

            success: function (res) {
                if (res.result.length <= 0) {
                    return console.log('失败');
                }

                html(res)
            }
        })
    }

    function html(res) {
        var htmlStr = template("tpl-suggestList", res)
        list.innerHTML = htmlStr;
        list.style.display = 'block'
        var k = document.querySelector("#ipt").value
        cache[k] = res
    }






    iptSearch.addEventListener('blur', function () {
        list.style.display = 'none'
    })


}